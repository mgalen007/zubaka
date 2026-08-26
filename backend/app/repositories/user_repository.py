from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User


class UserRepository:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def get_by_email(self, email: str) -> User | None:
        result = await self._db.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def create(
        self, email: str, hashed_password: str, full_name: str | None = None
    ) -> User:
        user = User(email=email, hashed_password=hashed_password, full_name=full_name)
        self._db.add(user)
        await self._db.flush()
        await self._db.commit()
        await self._db.refresh(user)
        return user
