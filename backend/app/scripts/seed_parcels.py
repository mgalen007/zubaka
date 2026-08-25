import asyncio
import json
from pathlib import Path
from typing import TypedDict

from geoalchemy2 import Geography
from geoalchemy2.shape import from_shape
from shapely.geometry import shape
from sqlalchemy import cast, func, select

from app.core.database import async_session
from app.models import Parcel

GEOJSON_PATH = Path("app/data/mock_parcels.geojson")


class ParcelProperties(TypedDict):
    upi: str
    zoning: str


class ParcelGeometry(TypedDict):
    type: str
    coordinates: list[list[list[float]]]


class ParcelFeature(TypedDict):
    type: str
    properties: ParcelProperties
    geometry: ParcelGeometry


class ParcelFeatureCollection(TypedDict):
    type: str
    features: list[ParcelFeature]


async def seed() -> None:
    data: ParcelFeatureCollection = json.loads(GEOJSON_PATH.read_text())

    async with async_session() as session:
        for feature in data["features"]:
            props = feature["properties"]
            geom = shape(feature["geometry"])

            existing = await session.execute(
                select(Parcel).where(Parcel.upi == props["upi"])
            )
            if existing.scalar_one_or_none() is not None:
                print(f"Skipping existing parcel {props['upi']}")
                continue

            wkb_geom = from_shape(geom, srid=4326)

            area_result = await session.execute(
                select(func.ST_Area(cast(wkb_geom, Geography)))
            )
            area_m2: float = area_result.scalar_one()

            parcel = Parcel(
                upi=props["upi"],
                zoning=props["zoning"],
                geometry=wkb_geom,
                area_m2=area_m2,
            )
            session.add(parcel)

        await session.commit()
        print(f"Seeded {len(data['features'])} parcels")


if __name__ == "__main__":
    asyncio.run(seed())