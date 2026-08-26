from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.repositories.user_repository import UserRepository
from app.schemas.auth import Token, UserCreate, UserRead
from app.services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def register(
    user_in: UserCreate,
    db: Annotated[AsyncSession, Depends(get_db)],
) -> UserRead:
    user_repository = UserRepository(db)
    auth_service = AuthService(user_repository)
    user = await auth_service.register(user_in)
    return UserRead.model_validate(user)


@router.post("/login", response_model=Token)
async def login(
    user_in: UserCreate,
    db: Annotated[AsyncSession, Depends(get_db)],
) -> Token:
    user_repository = UserRepository(db)
    auth_service = AuthService(user_repository)
    user = await auth_service.authenticate(user_in.email, user_in.password)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return auth_service.issue_token(user)
