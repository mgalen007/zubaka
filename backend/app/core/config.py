from functools import lru_cache
from typing import ClassVar

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Zubaka API"
    environment: str = "development"
    database_url: str 

    model_config: ClassVar[SettingsConfigDict] = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", case_sensitive=False
    )

@lru_cache
def get_settings() -> Settings:
    return Settings() # pyright: ignore [reportCallIssue]
