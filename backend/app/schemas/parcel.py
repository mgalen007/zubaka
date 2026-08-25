from typing import Any, Literal

from pydantic import BaseModel


class ParcelProperties(BaseModel):
    id: str
    upi: str
    zoning: str
    area_m2: float | None


class ParcelFeature(BaseModel):
    type: Literal["Feature"] = "Feature"
    geometry: dict[str, Any]
    properties: ParcelProperties


class ParcelFeatureCollection(BaseModel):
    type: Literal["FeatureCollection"] = "FeatureCollection"
    features: list[ParcelFeature]