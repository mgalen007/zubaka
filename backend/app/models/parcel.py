from uuid import UUID, uuid4

from geoalchemy2 import Geometry, WKBElement
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class Parcel(Base):
    __tablename__: str = "parcels"

    id: Mapped[UUID] = mapped_column(
        primary_key=True,
        default=uuid4,
    )
    upi: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
    )
    geometry: Mapped[WKBElement] = mapped_column(
        Geometry(
            geometry_type="POLYGON",
            srid=4326,
            spatial_index=True,
        ),
        nullable=False,
    )
    area_m2: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )