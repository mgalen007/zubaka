from typing import Annotated, cast

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.v1.auth import router as auth_router
from app.api.v1.land import router as land_router
from app.api.v1.parcels import router as parcels_router
from app.core.config import get_settings
from app.core.database import get_db

settings = get_settings()
app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(parcels_router, prefix="/api/v1")
app.include_router(land_router, prefix="/api/v1")
app.include_router(auth_router, prefix="/api/v1")


@app.get("/api/v1/health", tags=["health"])
async def health_check() -> dict[str, str]:
    return {
        "status": "OK",
        "name": settings.app_name,
        "environment": settings.environment,
    }


@app.get("/api/v1/health/db", tags=["health"])
async def db_health_check(
    db: Annotated[AsyncSession, Depends(get_db)],
) -> dict[str, str]:
    result = await db.execute(text("SELECT PostGIS_Version()"))
    extension = cast(int, result.scalar_one())

    return {"status": "OK", "postgis_version": str(extension)}
