from pydantic import BaseModel


class LandReport(BaseModel):
    upi: str
    zoning: str
    area_m2: float | None
    allowed_uses: list[str]
    restricted_uses: list[str]
    ai_explanation: str
