<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/square-dark.svg" />
    <img src="docs/square.svg" alt="five squares, one of them hollow" />
  </picture>
</p>

# buckwich.de

Personal site of **Buckwich** — black/white, minimal, squares (some with holes).

React 18 · Vite 5 · Tailwind 3 · served by nginx. No local Node required — everything runs in Docker.

## Quickstart

```bash
# dev server with hot reload → http://localhost:5173
docker compose up dev

# production build → http://localhost:8080
docker compose up -d --build web
```

## Deploy (GitHub Pages)

Push to `main` — `.github/workflows/pages.yml` builds and deploys automatically.
One-time setup: repo **Settings → Pages → Source: "GitHub Actions"**; DNS for `buckwich.de` → GitHub Pages A records (`public/CNAME` is already included).

## Feature flags

Toggle sections without touching code:

- **GitHub UI**: Actions → *Toggle features* → Run workflow (flips flags, commits, redeploys)
- **URL** (preview only): `?contact=off&openToWork=on`
- **Config**: `src/features.defaults.js`

Current flags: `contact` (Get-in-touch section), `openToWork` (hero badge).
Full documentation: [docs/feature-flags.md](docs/feature-flags.md).

## Projects

The Projects grid lives in `src/components/Work.jsx` (`CELLS`). Entries link to real repos; `null` cells are intentional holes. With opencode, just say *"sync projects from GitHub"* or *"add a project"* — skills handle the rest.

## Structure

```
src/
  App.jsx                 section order
  features(.defaults).js  feature flags
  components/             Header, Hero, Marquee, Work, About, Contact,
                          SquareField (animated bg), Square, Reveal
public/                   CNAME, robots.txt, sitemap.xml
.github/workflows/        pages.yml (deploy), toggle-features.yml
Dockerfile                multi-stage: node build → nginx serve
docker-compose.yml        web (prod) + dev (hot reload)
```
