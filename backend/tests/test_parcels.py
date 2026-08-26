from unittest.mock import AsyncMock, MagicMock, patch
from uuid import uuid4

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


class TestParcelsRoutes:
    @pytest.mark.asyncio
    async def test_list_parcels(self, client, mock_db):
        rows = [make_mock_row(up="UPI-1"), make_mock_row(up="UPI-2")]
        mock_result = MagicMock()
        mock_result.all.return_value = rows
        mock_db.execute.return_value = mock_result

        response = client.get("/api/v1/parcels")

        assert response.status_code == 200
        data = response.json()
        assert data["type"] == "FeatureCollection"
        assert len(data["features"]) == 2
        assert data["features"][0]["properties"]["upi"] == "UPI-1"

    @pytest.mark.asyncio
    async def test_list_parcels_with_bbox(self, client, mock_db):
        rows = [make_mock_row(up="UPI-1")]
        mock_result = MagicMock()
        mock_result.all.return_value = rows
        mock_db.execute.return_value = mock_result

        response = client.get("/api/v1/parcels?bbox=1.0,2.0,3.0,4.0")

        assert response.status_code == 200
        data = response.json()
        assert len(data["features"]) == 1

    @pytest.mark.asyncio
    async def test_list_parcels_invalid_bbox(self, client, mock_db):
        response = client.get("/api/v1/parcels?bbox=1.0,2.0,3.0")

        assert response.status_code == 400
        assert "bbox must be" in response.json()["detail"]

    @pytest.mark.asyncio
    async def test_list_parcels_invalid_bbox_values(self, client, mock_db):
        response = client.get("/api/v1/parcels?bbox=1.0,abc,3.0,4.0")

        assert response.status_code == 400
        assert "bbox values must be numeric" in response.json()["detail"]

    @pytest.mark.asyncio
    async def test_get_parcel_at_point_found(self, client, mock_db):
        parcel_id = uuid4()
        row = make_mock_row(up="UPI-1", parcel_id=parcel_id)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        response = client.get("/api/v1/parcels/point?lng=1.0&lat=2.0")

        assert response.status_code == 200
        data = response.json()
        assert data["type"] == "Feature"
        assert data["properties"]["upi"] == "UPI-1"
        assert data["properties"]["id"] == str(parcel_id)

    @pytest.mark.asyncio
    async def test_get_parcel_at_point_not_found(self, client, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        response = client.get("/api/v1/parcels/point?lng=1.0&lat=2.0")

        assert response.status_code == 200
        assert response.json() is None

    @pytest.mark.asyncio
    async def test_get_parcel_by_id_found(self, client, mock_db):
        parcel_id = uuid4()
        row = make_mock_row(up="UPI-1", parcel_id=parcel_id)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        response = client.get(f"/api/v1/parcels/{parcel_id}")

        assert response.status_code == 200
        data = response.json()
        assert data["type"] == "Feature"
        assert data["properties"]["id"] == str(parcel_id)
        assert data["properties"]["upi"] == "UPI-1"

    @pytest.mark.asyncio
    async def test_get_parcel_by_id_not_found(self, client, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        parcel_id = uuid4()
        response = client.get(f"/api/v1/parcels/{parcel_id}")

        assert response.status_code == 404
        assert response.json()["detail"] == "Parcel not found"

    @pytest.mark.asyncio
    async def test_get_land_report_found(self, client, mock_db):
        parcel_id = uuid4()
        row = make_mock_row(
            up="UPI-1", zoning="residential", area_m2=100.0, parcel_id=parcel_id
        )
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        mock_report_service = AsyncMock()
        mock_report_service.get_by_parcel_id.return_value = MagicMock(
            upi="UPI-1",
            zoning="residential",
            area_m2=100.0,
            allowed_uses=["Single-family homes", "Small home-based businesses", "Gardens"],
            restricted_uses=["Industrial activity", "Large commercial developments"],
            ai_explanation="Test explanation",
        )

        with patch("app.api.v1.parcels.ReportService", return_value=mock_report_service):
            response = client.get(f"/api/v1/parcels/{parcel_id}/report")

        assert response.status_code == 200
        data = response.json()
        assert data["upi"] == "UPI-1"
        assert data["zoning"] == "residential"
        assert data["area_m2"] == 100.0
        assert data["allowed_uses"] == ["Single-family homes", "Small home-based businesses", "Gardens"]
        assert data["restricted_uses"] == ["Industrial activity", "Large commercial developments"]
        assert data["ai_explanation"] == "Test explanation"

    @pytest.mark.asyncio
    async def test_get_land_report_not_found(self, client, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        parcel_id = uuid4()
        response = client.get(f"/api/v1/parcels/{parcel_id}/report")

        assert response.status_code == 404
        assert response.json()["detail"] == "Parcel not found"
