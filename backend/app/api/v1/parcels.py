from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models import Parcel
from app.schemas.parcel import ParcelFeature, ParcelFeatureCollection, ParcelProperties

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
        raise HTTPException(status_code=400, detail="bbox values must be numeric") from exc

    return min_lng, min_lat, max_lng, max_lat


@router.get("")
async def list_parcels(
    db: Annotated[AsyncSession, Depends(get_db)],
    bbox: str | None = None,
) -> ParcelFeatureCollection:
    query = select(
        Parcel.id,
        Parcel.upi,
        Parcel.zoning,
        Parcel.area_m2,
        func.ST_AsGeoJSON(Parcel.geometry).label("geojson"),
    )

    if bbox is not None:
        min_lng, min_lat, max_lng, max_lat = _parse_bbox(bbox)
        envelope = func.ST_MakeEnvelope(min_lng, min_lat, max_lng, max_lat, 4326)
        query = query.where(func.ST_Intersects(Parcel.geometry, envelope))

    result = await db.execute(query)
    rows = result.all()

    features = [
        ParcelFeature(
            geometry=json.loads(row.geojson),
            properties=ParcelProperties(
                id=str(row.id),
                upi=row.upi,
                zoning=row.zoning,
                area_m2=row.area_m2,
            ),
        )
        for row in rows
    ]

    return ParcelFeatureCollection(features=features)