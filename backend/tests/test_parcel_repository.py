from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest
from sqlalchemy.ext.asyncio import AsyncSession

from app.repositories.postgis.parcel_repository import PostGISParcelRepository
from app.schemas.parcel import ParcelFeatureCollection


@pytest.fixture
def mock_db():
    return AsyncMock(spec=AsyncSession)


def make_mock_row(
    up="TEST-UPI",
    zoning="residential",
    area_m2=100.0,
    geojson='{"type":"Polygon","coordinates":[]}',
    parcel_id=None,
):
    row = MagicMock()
    row.id = parcel_id or uuid4()
    row.upi = up
    row.zoning = zoning
    row.area_m2 = area_m2
    row.geojson = geojson
    return row


class TestPostGISParcelRepository:
    @pytest.mark.asyncio
    async def test_list_without_bbox(self, mock_db):
        rows = [make_mock_row(up="UPI-1"), make_mock_row(up="UPI-2")]
        mock_result = MagicMock()
        mock_result.all.return_value = rows
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.list()

        assert isinstance(result, ParcelFeatureCollection)
        assert len(result.features) == 2
        assert result.features[0].properties.upi == "UPI-1"
        assert result.features[1].properties.upi == "UPI-2"
        mock_db.execute.assert_called_once()

    @pytest.mark.asyncio
    async def test_list_with_bbox(self, mock_db):
        rows = [make_mock_row(up="UPI-1")]
        mock_result = MagicMock()
        mock_result.all.return_value = rows
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.list(bbox=(1.0, 2.0, 3.0, 4.0))

        assert len(result.features) == 1
        assert result.features[0].properties.upi == "UPI-1"
        mock_db.execute.assert_called_once()

    @pytest.mark.asyncio
    async def test_get_at_point_found(self, mock_db):
        row = make_mock_row(up="UPI-1")
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_at_point(1.0, 2.0)

        assert result is not None
        assert result.properties.upi == "UPI-1"

    @pytest.mark.asyncio
    async def test_get_at_point_not_found(self, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_at_point(1.0, 2.0)

        assert result is None

    @pytest.mark.asyncio
    async def test_get_by_id_found(self, mock_db):
        parcel_id = uuid4()
        row = make_mock_row(up="UPI-1", parcel_id=parcel_id)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_by_id(parcel_id)

        assert result is not None
        assert result.properties.id == str(parcel_id)
        assert result.properties.upi == "UPI-1"

    @pytest.mark.asyncio
    async def test_get_by_id_not_found(self, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_by_id(uuid4())

        assert result is None

    @pytest.mark.asyncio
    async def test_get_report_data_by_id_found(self, mock_db):
        parcel_id = uuid4()
        row = make_mock_row(up="UPI-1", zoning="commercial", area_m2=200.0, parcel_id=parcel_id)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_report_data_by_id(parcel_id)

        assert result is not None
        assert result.upi == "UPI-1"
        assert result.zoning == "commercial"
        assert result.area_m2 == 200.0

    @pytest.mark.asyncio
    async def test_get_report_data_by_id_not_found(self, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_report_data_by_id(uuid4())

        assert result is None

    @pytest.mark.asyncio
    async def test_get_report_data_by_upi_found(self, mock_db):
        row = make_mock_row(up="UPI-1", zoning="mixed_use", area_m2=150.0)
        mock_result = MagicMock()
        mock_result.first.return_value = row
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_report_data_by_upi("UPI-1")

        assert result is not None
        assert result.upi == "UPI-1"
        assert result.zoning == "mixed_use"
        assert result.area_m2 == 150.0

    @pytest.mark.asyncio
    async def test_get_report_data_by_upi_not_found(self, mock_db):
        mock_result = MagicMock()
        mock_result.first.return_value = None
        mock_db.execute.return_value = mock_result

        repository = PostGISParcelRepository(mock_db)
        result = await repository.get_report_data_by_upi("NONEXISTENT")

        assert result is None
