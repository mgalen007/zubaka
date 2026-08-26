from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.repositories.mock.zoning_repository import MockZoningRepository
from app.repositories.postgis.parcel_repository import PostGISParcelRepository
from app.schemas.parcel import ParcelFeature, ParcelFeatureCollection
from app.schemas.report import LandReport
from app.services.report_service import ReportService

router = APIRouter(prefix="/parcels", tags=["parcels"])


def _parse_bbox(bbox: str) -> tuple[float, float, float, float]:
    parts = bbox.split(",")
    if len(parts) != 4:
        raise HTTPException(
            status_code=400,
            detail="bbox must be 'min_lng,min_lat,max_lng,max_lat'",
        )
    try:
        min_lng, min_lat, max_lng, max_lat = (float(p) for p in parts)
    except ValueError as exc:
        raise HTTPException(
            status_code=400, detail="bbox values must be numeric"
        ) from exc

    return min_lng, min_lat, max_lng, max_lat


@router.get("")
async def list_parcels(
    db: Annotated[AsyncSession, Depends(get_db)],
    bbox: str | None = None,
) -> ParcelFeatureCollection:
    repository = PostGISParcelRepository(db)

    if bbox is not None:
        min_lng, min_lat, max_lng, max_lat = _parse_bbox(bbox)
        return await repository.list(bbox=(min_lng, min_lat, max_lng, max_lat))

    return await repository.list()


@router.get("/point")
async def get_parcel_at_point(
    db: Annotated[AsyncSession, Depends(get_db)],
    lng: float,
    lat: float,
) -> ParcelFeature | None:
    repository = PostGISParcelRepository(db)
    return await repository.get_at_point(lng, lat)


@router.get("/{parcel_id}")
async def get_parcel_by_id(
    db: Annotated[AsyncSession, Depends(get_db)],
    parcel_id: UUID,
) -> ParcelFeature:
    repository = PostGISParcelRepository(db)
    parcel = await repository.get_by_id(parcel_id)

    if parcel is None:
        raise HTTPException(status_code=404, detail="Parcel not found")

    return parcel


@router.get("/{parcel_id}/report")
async def get_land_report(
    db: Annotated[AsyncSession, Depends(get_db)],
    parcel_id: UUID,
) -> LandReport:
    parcel_repository = PostGISParcelRepository(db)
    zoning_repository = MockZoningRepository()
    report_service = ReportService(parcel_repository, zoning_repository)

    report = await report_service.get_by_parcel_id(parcel_id)

    if report is None:
        raise HTTPException(status_code=404, detail="Parcel not found")

    return report
