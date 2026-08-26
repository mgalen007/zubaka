from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from app.repositories.mock.zoning_repository import MockZoningRepository
from app.repositories.postgis.parcel_repository import (
    ParcelReportData,
    PostGISParcelRepository,
)
from app.services.report_service import ReportService


@pytest.fixture
def mock_parcel_repository():
    return MagicMock(spec=PostGISParcelRepository)


@pytest.fixture
def mock_zoning_repository():
    return MagicMock(spec=MockZoningRepository)


class TestReportService:
    @pytest.mark.asyncio
    async def test_get_by_parcel_id_found(
        self, mock_parcel_repository, mock_zoning_repository
    ):
        parcel = ParcelReportData(
            upi="UPI-1",
            zoning="residential",
            area_m2=100.0,
        )
        mock_parcel_repository.get_report_data_by_id.return_value = parcel
        mock_zoning_repository.get_rules.return_value = {
            "allowed": ["Single-family homes"],
            "restricted": ["Industrial activity"],
        }

        service = ReportService(mock_parcel_repository, mock_zoning_repository)
        result = await service.get_by_parcel_id(uuid4())

        assert result is not None
        assert result.upi == "UPI-1"
        assert result.zoning == "residential"
        assert result.area_m2 == 100.0
        assert result.allowed_uses == ["Single-family homes"]
        assert result.restricted_uses == ["Industrial activity"]

    @pytest.mark.asyncio
    async def test_get_by_parcel_id_not_found(
        self, mock_parcel_repository, mock_zoning_repository
    ):
        mock_parcel_repository.get_report_data_by_id.return_value = None

        service = ReportService(mock_parcel_repository, mock_zoning_repository)
        result = await service.get_by_parcel_id(uuid4())

        assert result is None

    @pytest.mark.asyncio
    async def test_get_by_upi_found(
        self, mock_parcel_repository, mock_zoning_repository
    ):
        parcel = ParcelReportData(
            upi="UPI-1",
            zoning="commercial",
            area_m2=200.0,
        )
        mock_parcel_repository.get_report_data_by_upi.return_value = parcel
        mock_zoning_repository.get_rules.return_value = {
            "allowed": ["Retail shops"],
            "restricted": ["Heavy manufacturing"],
        }

        service = ReportService(mock_parcel_repository, mock_zoning_repository)
        result = await service.get_by_upi("UPI-1")

        assert result is not None
        assert result.upi == "UPI-1"
        assert result.zoning == "commercial"
        assert result.area_m2 == 200.0
        assert result.allowed_uses == ["Retail shops"]
        assert result.restricted_uses == ["Heavy manufacturing"]

    @pytest.mark.asyncio
    async def test_get_by_upi_not_found(
        self, mock_parcel_repository, mock_zoning_repository
    ):
        mock_parcel_repository.get_report_data_by_upi.return_value = None

        service = ReportService(mock_parcel_repository, mock_zoning_repository)
        result = await service.get_by_upi("NONEXISTENT")

        assert result is None

    @pytest.mark.asyncio
    async def test_build_report_calls_explanation_generator(
        self, mock_parcel_repository, mock_zoning_repository
    ):
        parcel = ParcelReportData(
            upi="UPI-1",
            zoning="residential",
            area_m2=100.0,
        )
        mock_parcel_repository.get_report_data_by_id.return_value = parcel
        mock_zoning_repository.get_rules.return_value = {
            "allowed": ["Single-family homes"],
            "restricted": ["Industrial activity"],
        }

        explanation_generator = AsyncMock(return_value="Test explanation")
        service = ReportService(
            mock_parcel_repository,
            mock_zoning_repository,
            explanation_generator=explanation_generator,
        )
        result = await service.get_by_parcel_id(uuid4())

        assert result is not None
        assert result.ai_explanation == "Test explanation"
        explanation_generator.assert_called_once_with(
            upi="UPI-1",
            zoning="residential",
            allowed=["Single-family homes"],
            restricted=["Industrial activity"],
        )
