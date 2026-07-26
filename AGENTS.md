# AGENTS.md — buckwich.de

Personal brand site. React 18 + Vite 5 + Tailwind 3, built & served via Docker (no local Node).

## Commands
- Dev (hot reload): `docker compose up dev` → http://localhost:5173
- Prod: `docker compose up -d --build web` → http://localhost:8080
- Verify: `curl -s -o /dev/null -w "%{http_code}" localhost:8080`
- Deploy: push to `main` → `.github/workflows/pages.yml` builds & deploys to GitHub Pages (custom domain via `public/CNAME`). Requires repo Settings → Pages → Source: "GitHub Actions".
- Machine quirk: docker socket is `root:docker`; if permission denied, use `sg docker -c "docker ..."` (owner is in the docker group) or ask owner to re-run `sudo chmod 666 /var/run/docker.sock`. No local Node — always build/test via Docker.

## Structure
- `src/App.jsx` — section order
- `src/components/` — Header, Hero, Marquee, Work, About, Contact, SquareField, Reveal
- `src/index.css` — Tailwind + `.text-outline(-white)` + marquee keyframes

## Content rules (owner's intent — do not violate)
- Never invent facts: no fake projects, numbers, claims, locations, or availability status. Use placeholders; the owner fills them in.
- Ask the owner before publishing anything about availability/status — do not assume.
- The owner is Simon (public on github.com/Buckwich — approved to use; that profile is the source of truth for bio/projects).
- Don't name what the site is ("personal brand", "portfolio") — show, don't tell.
- Squares are the *visual language only*: keep them out of the copy/text. Design reference: `docs/square.svg` — uniform size, thick stroke, mostly filled, rarely hollow.
- Colors: dark theme — black background, white foreground (+ opacity steps of both). About section is inverted (white on black). Nothing else. Owner prefers dark themes.
- Unannounced future stuff stays unannounced. `SOON` placeholders are the approved teaser.

## Feature flags
- Components read `FEATURES` from `src/features.js`. Defaults live in `src/features.defaults.js` (rewritten by the "Toggle features" workflow). URL overrides for testing: `?contact=off&openToWork=on`.
- New flag: add to `DEFAULT_FEATURES` + a boolean input in `.github/workflows/toggle-features.yml` (inputs + printf line), then use `FEATURES.x` in components. Never hard-code toggleable content.
- Full reference (flag table, providers, checklist): `docs/feature-flags.md` — keep it in sync when flags change.

## Adding a project
Use the `add-project` skill. Manual way: in `Work.jsx`, replace one `null` in `CELLS` with `{ id: '01', title: 'NAME', stack: 'A · B', href: '...' }` and render it with the Project card pattern (see skill file for the snippet).

## Token-reduction rules for agents (follow strictly)
- Think briefly. Skip restating the task or summarizing file contents back.
- Batch independent tool calls in one message.
- Prefer `grep` over reading whole files; `read` with offset/limit, never re-read.
- Prefer `edit` over `write`; smallest possible diff.
- One verification command at the end (`curl` + one `grep`), not step-by-step checks.
- Final replies: a few lines, no screenshots of code, no repeating what the user said.
