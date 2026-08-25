import json
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.zoning_rules import ZONING_RULES
from app.models import Parcel
from app.schemas.parcel import ParcelFeature, ParcelFeatureCollection, ParcelProperties
from app.schemas.report import LandReport
from app.services.ai_service import generate_explanation

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


@router.get("/point")
async def get_parcel_at_point(
    db: Annotated[AsyncSession, Depends(get_db)],
    lng: float,
    lat: float,
) -> ParcelFeature | None:
    point = func.ST_SetSRID(func.ST_MakePoint(lng, lat), 4326)

    query = select(
        Parcel.id,
        Parcel.upi,
        Parcel.zoning,
        Parcel.area_m2,
        func.ST_AsGeoJSON(Parcel.geometry).label("geojson"),
    ).where(func.ST_Contains(Parcel.geometry, point))

    result = await db.execute(query)
    row = result.first()

    if row is None:
        return None

    return ParcelFeature(
        geometry=json.loads(row.geojson),
        properties=ParcelProperties(
            id=str(row.id),
            upi=row.upi,
            zoning=row.zoning,
            area_m2=row.area_m2,
        ),
    )


@router.get("/{parcel_id}")
async def get_parcel_by_id(
    db: Annotated[AsyncSession, Depends(get_db)],
    parcel_id: UUID,
) -> ParcelFeature:
    query = select(
        Parcel.id,
        Parcel.upi,
        Parcel.zoning,
        Parcel.area_m2,
        func.ST_AsGeoJSON(Parcel.geometry).label("geojson"),
    ).where(Parcel.id == parcel_id)

    result = await db.execute(query)
    row = result.first()

    if row is None:
        raise HTTPException(status_code=404, detail="Parcel not found")

    return ParcelFeature(
        geometry=json.loads(row.geojson),
        properties=ParcelProperties(
            id=str(row.id),
            upi=row.upi,
            zoning=row.zoning,
            area_m2=row.area_m2,
        ),
    )

@router.get("/{parcel_id}/report")
async def get_land_report(
    db: Annotated[AsyncSession, Depends(get_db)],
    parcel_id: UUID
) -> LandReport:
    query = select(Parcel.upi, Parcel.zoning, Parcel.area_m2).where(
            Parcel.id == parcel_id
        )
    result = await db.execute(query)
    row = result.first()
    
    if row is None:
        raise HTTPException(status_code=404, detail="Parcel not found")
    
    rules = ZONING_RULES.get(row.zoning, {"allowed": [], "restricted": []})
    
    explanation = await generate_explanation(
        upi=row.upi,
        zoning=row.zoning,
        allowed=rules["allowed"],
        restricted=rules["restricted"],
    )
    
    return LandReport(
        upi=row.upi,
        zoning=row.zoning,
        area_m2=row.area_m2,
        allowed_uses=rules["allowed"],
        restricted_uses=rules["restricted"],
        ai_explanation=explanation,
    )
