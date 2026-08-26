from datetime import timedelta

from fastapi import HTTPException, status

from app.core.security import create_access_token, hash_password, verify_password
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import Token, UserCreate


class AuthService:
    def __init__(self, user_repository: UserRepository) -> None:
        self._user_repository = user_repository

    async def register(self, user_in: UserCreate) -> User:
        existing = await self._user_repository.get_by_email(user_in.email)
        if existing is not None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )

        hashed_password = hash_password(user_in.password)
        return await self._user_repository.create(
            email=user_in.email,
            hashed_password=hashed_password,
            full_name=user_in.full_name,
        )

    async def authenticate(self, email: str, password: str) -> User | None:
        user = await self._user_repository.get_by_email(email)
        if user is None:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def issue_token(self, user: User) -> Token:
        access_token = create_access_token(
            data={"sub": user.email},
            expires_delta=timedelta(minutes=60),
        )
        return Token(access_token=access_token)
