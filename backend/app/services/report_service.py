from collections.abc import Awaitable, Callable
from uuid import UUID

from app.repositories.mock.zoning_repository import MockZoningRepository
from app.repositories.postgis.parcel_repository import (
    ParcelReportData,
    PostGISParcelRepository,
)
from app.schemas.report import LandReport
from app.services.ai_service import generate_explanation

ExplanationGenerator = Callable[
    [str, str, list[str], list[str]],
    Awaitable[str],
]


class ReportService:
    def __init__(
        self,
        parcel_repository: PostGISParcelRepository,
        zoning_repository: MockZoningRepository,
        explanation_generator: ExplanationGenerator = generate_explanation,
    ) -> None:
        self._parcel_repository = parcel_repository
        self._zoning_repository = zoning_repository
        self._explanation_generator = explanation_generator

    async def get_by_parcel_id(self, parcel_id: UUID) -> LandReport | None:
        parcel = await self._parcel_repository.get_report_data_by_id(parcel_id)
        if parcel is None:
            return None

        return await self._build_report(parcel)

    async def get_by_upi(self, upi: str) -> LandReport | None:
        parcel = await self._parcel_repository.get_report_data_by_upi(upi)
        if parcel is None:
            return None

        return await self._build_report(parcel)

    async def _build_report(self, parcel: ParcelReportData) -> LandReport:
        rules = self._zoning_repository.get_rules(parcel.zoning)
        explanation = await self._explanation_generator(
            upi=parcel.upi,
            zoning=parcel.zoning,
            allowed=rules["allowed"],
            restricted=rules["restricted"],
        )

        return LandReport(
            upi=parcel.upi,
            zoning=parcel.zoning,
            area_m2=parcel.area_m2,
            allowed_uses=rules["allowed"],
            restricted_uses=rules["restricted"],
            ai_explanation=explanation,
        )
