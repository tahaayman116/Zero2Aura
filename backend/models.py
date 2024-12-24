from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from database import Base
from passlib.context import CryptContext
import jwt
from datetime import datetime, timedelta
import os

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    progress = relationship("UserProgress", back_populates="user")

    @staticmethod
    def get_by_email(db, email):
        return db.query(User).filter(User.email == email).first()

    @staticmethod
    def create(db, user):
        hashed_password = pwd_context.hash(user.password)
        db_user = User(email=user.email, name=user.name, hashed_password=hashed_password)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @staticmethod
    def authenticate(db, user_credentials):
        user = User.get_by_email(db, user_credentials.email)
        if not user or not pwd_context.verify(user_credentials.password, user.hashed_password):
            return None
        return user

    def create_access_token(self):
        to_encode = {
            "sub": self.email,
            "exp": datetime.utcnow() + timedelta(days=7)
        }
        return jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    level = Column(String)
    lessons = relationship("Lesson", back_populates="course")

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(Text)
    course_id = Column(Integer, ForeignKey("courses.id"))
    order = Column(Integer)
    course = relationship("Course", back_populates="lessons")

class UserProgress(Base):
    __tablename__ = "user_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lesson_id = Column(Integer, ForeignKey("lessons.id"))
    completed = Column(Boolean, default=False)
    user = relationship("User", back_populates="progress")
