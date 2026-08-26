import pytest
from pydantic import ValidationError

from app.core.security import hash_password, verify_password
from app.repositories.user_repository import UserRepository
from app.schemas.auth import BCRYPT_MAX_PASSWORD_BYTES, UserCreate


class FakeSession:
    def __init__(self) -> None:
        self.added_user = None
        self.flushed = False
        self.committed = False
        self.refreshed_user = None

    def add(self, user: object) -> None:
        self.added_user = user

    async def flush(self) -> None:
        self.flushed = True

    async def commit(self) -> None:
        self.committed = True

    async def refresh(self, user: object) -> None:
        self.refreshed_user = user


def test_user_create_accepts_password_at_bcrypt_byte_limit() -> None:
    user = UserCreate(
        email="person@example.com",
        password="a" * BCRYPT_MAX_PASSWORD_BYTES,
    )

    assert user.password == "a" * BCRYPT_MAX_PASSWORD_BYTES


def test_user_create_rejects_ascii_password_over_bcrypt_byte_limit() -> None:
    with pytest.raises(ValidationError, match="Password must be 72 bytes or fewer"):
        UserCreate(
            email="person@example.com",
            password="a" * (BCRYPT_MAX_PASSWORD_BYTES + 1),
        )


def test_user_create_rejects_multibyte_password_over_bcrypt_byte_limit() -> None:
    with pytest.raises(ValidationError, match="Password must be 72 bytes or fewer"):
        UserCreate(
            email="person@example.com",
            password="é" * 37,
        )


def test_hash_password_verifies_exact_submitted_password() -> None:
    password = "a" * BCRYPT_MAX_PASSWORD_BYTES

    hashed_password = hash_password(password)

    assert verify_password(password, hashed_password)
    assert not verify_password(("a" * 71) + "b", hashed_password)


@pytest.mark.asyncio
async def test_user_repository_create_commits_and_refreshes_user() -> None:
    session = FakeSession()
    repository = UserRepository(session)  # pyright: ignore[reportArgumentType]

    user = await repository.create(
        email="person@example.com",
        hashed_password="hashed-password",
        full_name="Person Example",
    )

    assert session.added_user is user
    assert session.flushed is True
    assert session.committed is True
    assert session.refreshed_user is user
    assert user.email == "person@example.com"
