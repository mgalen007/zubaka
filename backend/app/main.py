from fastapi import FastAPI

from app.core.config import get_settings

settings = get_settings()
app = FastAPI(title=settings.app_name)


@app.get("/api/v1/health", tags=["Health check"])
async def health_check() -> dict[str, str]:
    return {
        "status": "OK",
        "name": settings.app_name,
        "environment": settings.environment,
    }
