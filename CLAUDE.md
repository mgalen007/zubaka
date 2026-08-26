# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a monorepo with two independently-managed apps:

- `backend/` — FastAPI + PostgreSQL/PostGIS API (Python 3.14, managed with `uv`). This is where active development happens.
- `frontend/` — An Astro + Tailwind site. It is currently the unmodified "Positivus" marketing-page template (see `frontend/README.md`) and is not yet wired up to the backend API — treat it as a starting scaffold, not an integrated frontend.

## Backend

### Commands

Run all commands from `backend/`.

```
uv sync                          # install deps (runtime + dev groups)
uv run uvicorn app.main:app --reload   # run dev server
uv run pytest                    # run all tests
uv run pytest tests/test_parcels.py    # run a single test file
uv run pytest tests/test_parcels.py::test_name -v  # run a single test
uv run ruff check .              # lint
uv run alembic upgrade head      # apply migrations
uv run alembic revision --autogenerate -m "message"  # new migration
```

Requires a `.env` file in `backend/` (see `.env.example`) with `DATABASE_URL`, `GROQ_API_KEY`, and `SECRET_KEY` at minimum. The database must be PostgreSQL with the PostGIS extension enabled.

### Architecture

The backend follows a strict layered flow: **routes → services → repositories → models**. Routes in `app/api/v1/*.py` are kept thin — they parse/validate input, instantiate repositories/services inline, and return schemas. Business logic lives in `app/services/`, data access lives in `app/repositories/`.

Two parallel repository backends exist and are intentionally not interchangeable:

- `app/repositories/postgis/` — real spatial data (parcels, administrative areas) queried from PostGIS via SQLAlchemy + GeoAlchemy2 (`ST_Contains`, `ST_Intersects`, `ST_MakeEnvelope`, etc.).
- `app/repositories/mock/` — zoning rules are **not** in the database; `MockZoningRepository` reads static data from `app/core/zoning_rules.py` / `app/data/mock_zoning.json`. This is deliberate (see `backend/CHECKLIST.md` §6) — zoning is a mocked/demo layer sitting on top of real parcel geometry, not a design gap to "fix" by moving it into Postgres.

The core domain flow (see `backend/CHECKLIST.md` §7) is:

```
Coordinates/UPI → real PostGIS parcel → mock zoning rules → analysis/report → (optional) AI explanation
```

`ReportService` (`app/services/report_service.py`) composes a `PostGISParcelRepository` and `MockZoningRepository` to build a `LandReport`, then calls `generate_explanation` (`app/services/ai_service.py`, via Groq) to add a plain-language AI explanation. The AI is only ever used to *explain* an already-computed deterministic result — it never determines zoning or land-use outcomes itself; preserve that separation when touching this code.

There are two endpoints that both produce a `LandReport` for backward-compatibility reasons: `GET /api/v1/parcels/{parcel_id}/report` (legacy, by UUID) and `GET /api/v1/land/report/{upi}` (checklist-aligned, by UPI). Both go through the same `ReportService`; see `backend/REFACTOR_PLAN.md` for the rationale.

Auth (`app/api/v1/auth.py`, `app/core/security.py`) is JWT-based (`python-jose`) with bcrypt password hashing via `passlib`, backed by `app/repositories/user_repository.py` and the `User` model.

Settings are centralized in `app/core/config.py` via `pydantic-settings`, loaded from `.env` and cached with `get_settings()` (`lru_cache`). The async SQLAlchemy engine/session and the declarative `Base` live in `app/core/database.py`; routes get a session via the `get_db` dependency.

### Testing conventions

Tests use `pytest` + `pytest-asyncio` with FastAPI's `TestClient`. `tests/conftest.py` provides a `client` fixture that overrides the `get_db` dependency with an `AsyncMock`, plus a `make_mock_row` helper for building fake SQLAlchemy row results — repository/route tests generally mock the DB session rather than hitting real PostGIS.

`backend/CHECKLIST.md` tracks feature build-out status and intended scope (including which endpoints should/shouldn't exist) — check it before adding new endpoints or models. `backend/REFACTOR_PLAN.md` documents the rationale for the current route/service/repository split.

## Frontend

Standard Astro project; see `frontend/README.md` for the template's own docs. Commands (from `frontend/`): `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
