from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from fastapi.testclient import TestClient

from app.core.database import get_db
from app.main import app as fastapi_app
from tests.conftest import make_mock_row


@pytest.fixture
def mock_db():
    return AsyncMock()


@pytest.fixture
def client(mock_db):
    async def override_get_db():
        yield mock_db

    fastapi_app.dependency_overrides[get_db] = override_get_db
    with TestClient(fastapi_app) as test_client:
        yield test_client
    fastapi_app.dependency_overrides.clear()


class TestLandRoutes:
    @pytest.mark.asyncio
    async def test_get_land_report_by_upi_found(self, client, mock_db):
        row = make_mock_row(up="UPI-1", zoning="commercial", area_m2=200.0)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        mock_report_service = AsyncMock()
        mock_report_service.get_by_upi.return_value = MagicMock(
            upi="UPI-1",
            zoning="commercial",
            area_m2=200.0,
            allowed_uses=["Retail shops", "Offices", "Restaurants"],
            restricted_uses=["Heavy manufacturing", "Residential-only construction without mixed-use permit"],
            ai_explanation="Test explanation",
        )

        with patch("app.api.v1.land.ReportService", return_value=mock_report_service):
            response = client.get("/api/v1/land/report/UPI-1")

        assert response.status_code == 200
        data = response.json()
        assert data["upi"] == "UPI-1"
        assert data["zoning"] == "commercial"
        assert data["area_m2"] == 200.0
        assert data["allowed_uses"] == ["Retail shops", "Offices", "Restaurants"]
        assert data["restricted_uses"] == ["Heavy manufacturing", "Residential-only construction without mixed-use permit"]
        assert data["ai_explanation"] == "Test explanation"

    @pytest.mark.asyncio
    async def test_get_land_report_by_upi_not_found(self, client, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        response = client.get("/api/v1/land/report/NONEXISTENT")

        assert response.status_code == 404
        assert response.json()["detail"] == "Parcel not found"
