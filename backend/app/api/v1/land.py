from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.repositories.mock.zoning_repository import MockZoningRepository
from app.repositories.postgis.parcel_repository import PostGISParcelRepository
from app.schemas.report import LandReport
from app.services.report_service import ReportService

router = APIRouter(prefix="/land", tags=["land"])


@router.get("/report/{upi}")
async def get_land_report_by_upi(
    db: Annotated[AsyncSession, Depends(get_db)],
    upi: str,
) -> LandReport:
    parcel_repository = PostGISParcelRepository(db)
    zoning_repository = MockZoningRepository()
    report_service = ReportService(parcel_repository, zoning_repository)

    report = await report_service.get_by_upi(upi)

    if report is None:
        raise HTTPException(status_code=404, detail="Parcel not found")

    return report
