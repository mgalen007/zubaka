import json
from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models import Parcel
from app.schemas.parcel import ParcelFeature, ParcelFeatureCollection, ParcelProperties

router = APIRouter(prefix="/parcels", tags=["Parcels"])


@router.get("")
async def list_parcels(
    db: Annotated[AsyncSession, Depends(get_db)],
) -> ParcelFeatureCollection:
    result = await db.execute(
        select(
            Parcel.id,
            Parcel.upi,
            Parcel.zoning,
            Parcel.area_m2,
            func.ST_AsGeoJSON(Parcel.geometry).label("geojson"),
        )
    )
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