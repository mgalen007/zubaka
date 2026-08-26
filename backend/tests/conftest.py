from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from app.core.database import get_db
from app.main import app as fastapi_app


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
