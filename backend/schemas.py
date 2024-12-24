from pydantic import BaseModel, EmailStr
from typing import List, Optional

class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True

class LessonBase(BaseModel):
    title: str
    content: str
    order: int

class LessonCreate(LessonBase):
    course_id: int

class Lesson(LessonBase):
    id: int
    course_id: int

    class Config:
        from_attributes = True

class CourseBase(BaseModel):
    title: str
    description: str
    level: str

class CourseCreate(CourseBase):
    pass

class Course(CourseBase):
    id: int
    lessons: List[Lesson] = []

    class Config:
        from_attributes = True

class UserProgressBase(BaseModel):
    lesson_id: int
    completed: bool

class UserProgress(UserProgressBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
