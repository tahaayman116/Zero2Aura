from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models
import schemas
from database import SessionLocal, engine
from fastapi.security import OAuth2PasswordBearer

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="مدرسة البرمجة - Code Academy Arabic")

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://zero2aura.vercel.app",  # Vercel domain
        "http://localhost:3000",         # Local development
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "مرحباً بكم في مدرسة البرمجة"}

@app.get("/courses", response_model=List[schemas.Course])
async def get_courses(db: Session = Depends(get_db)):
    courses = db.query(models.Course).all()
    return courses

@app.get("/lessons/{course_id}", response_model=List[schemas.Lesson])
async def get_lessons(course_id: int, db: Session = Depends(get_db)):
    lessons = db.query(models.Lesson).filter(models.Lesson.course_id == course_id).all()
    return lessons

@app.post("/register", response_model=schemas.User)
async def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = models.User.get_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="البريد الإلكتروني مسجل مسبقاً")
    return models.User.create(db=db, user=user)

@app.post("/login")
async def login(user_credentials: schemas.UserLogin, db: Session = Depends(get_db)):
    user = models.User.authenticate(db, user_credentials)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="خطأ في البريد الإلكتروني أو كلمة المرور"
        )
    return {"access_token": user.create_access_token()}
