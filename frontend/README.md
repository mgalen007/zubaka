# Zubaka Frontend

Zubaka helps prospective land buyers in Kigali verify a plot's real Masterplan zoning before
dealing with informal brokers. This is the Astro + Tailwind frontend, built on top of the
`backend/` FastAPI + PostGIS API — see the repository root `CLAUDE.md` for the full-stack overview.

Built around the real product (interactive land map, UPI search, zoning rules, AI assistant).

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a
route based on its file name.

- `src/pages/map.astro` — interactive Leaflet map backed by `GET /api/v1/parcels`
- `src/pages/search.astro` — UPI lookup backed by `GET /api/v1/land/report/{upi}`
- `src/pages/services.astro` — Kigali zoning category reference
- `src/pages/ai.astro` — demo assistant (currently frontend-only, not backend-connected)
- `src/lib/api.ts` / `src/lib/zoning.ts` — shared typed API client and zoning helpers

Any static assets, like images, can be placed in the `public/` directory.

## Configuration

Copy `.env.example` to `.env` and point `PUBLIC_API_BASE_URL` at a running backend (see
`backend/README.md` for how to start it — it must have CORS enabled for this frontend's origin).

## 🧞 Commands

All commands are run from this directory (`frontend/`), from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
