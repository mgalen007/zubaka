import json
from dataclasses import dataclass
from typing import Any
from uuid import UUID

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import Parcel
from app.schemas.parcel import ParcelFeature, ParcelFeatureCollection, ParcelProperties


@dataclass(frozen=True)
class ParcelReportData:
    upi: str
    zoning: str
    area_m2: float | None


class PostGISParcelRepository:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def list(
        self, bbox: tuple[float, float, float, float] | None = None
    ) -> ParcelFeatureCollection:
        query = self._feature_query()

        if bbox is not None:
            min_lng, min_lat, max_lng, max_lat = bbox
            envelope = func.ST_MakeEnvelope(min_lng, min_lat, max_lng, max_lat, 4326)
            query = query.where(func.ST_Intersects(Parcel.geometry, envelope))

        result = await self._db.execute(query)
        rows = result.all()

        return ParcelFeatureCollection(
            features=[self._row_to_feature(row) for row in rows]
        )

    async def get_at_point(self, lng: float, lat: float) -> ParcelFeature | None:
        point = func.ST_SetSRID(func.ST_MakePoint(lng, lat), 4326)
        query = self._feature_query().where(func.ST_Contains(Parcel.geometry, point))

        result = await self._db.execute(query)
        row = result.first()

        if row is None:
            return None

        return self._row_to_feature(row)

    async def get_by_id(self, parcel_id: UUID) -> ParcelFeature | None:
        query = self._feature_query().where(Parcel.id == parcel_id)

        result = await self._db.execute(query)
        row = result.first()

        if row is None:
            return None

        return self._row_to_feature(row)

    async def get_report_data_by_id(
        self, parcel_id: UUID
    ) -> ParcelReportData | None:
        query = self._report_query().where(Parcel.id == parcel_id)
        return await self._get_report_data(query)

    async def get_report_data_by_upi(self, upi: str) -> ParcelReportData | None:
        query = self._report_query().where(Parcel.upi == upi)
        return await self._get_report_data(query)

    async def _get_report_data(self, query: Any) -> ParcelReportData | None:
        result = await self._db.execute(query)
        row = result.first()

        if row is None:
            return None

        return ParcelReportData(
            upi=row.upi,
            zoning=row.zoning,
            area_m2=row.area_m2,
        )

    def _feature_query(self) -> Any:
        return select(
            Parcel.id,
            Parcel.upi,
            Parcel.zoning,
            Parcel.area_m2,
            func.ST_AsGeoJSON(Parcel.geometry).label("geojson"),
        )

    def _report_query(self) -> Any:
        return select(Parcel.upi, Parcel.zoning, Parcel.area_m2)

    def _row_to_feature(self, row: Any) -> ParcelFeature:
        return ParcelFeature(
            geometry=json.loads(row.geojson),
            properties=ParcelProperties(
                id=str(row.id),
                upi=row.upi,
                zoning=row.zoning,
                area_m2=row.area_m2,
            ),
        )
