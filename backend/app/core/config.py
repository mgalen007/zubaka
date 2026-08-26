from functools import lru_cache
from typing import ClassVar

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Zubaka API"
    environment: str = "development"
    database_url: str 
    groq_api_key: str

    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    cors_origins: list[str] = ["http://localhost:4321", "http://127.0.0.1:4321"]

    model_config: ClassVar[SettingsConfigDict] = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", case_sensitive=False
    )

@lru_cache
def get_settings() -> Settings:
    return Settings() # pyright: ignore [reportCallIssue]
