---
name: sync-projects
description: Use ONLY when updating/syncing the Projects grid on buckwich.de with real repos from the owner's GitHub profile (github.com/Buckwich), e.g. "update projects from GitHub", "sync my repos".
---

# Sync projects from the GitHub profile

Target: `CELLS` in `src/components/Work.jsx`.

1. Fetch `https://github.com/Buckwich` (profile README has a curated repo list; pinned repos are a good fallback). Optionally check individual repo pages for language/year.
2. Pick up to 6 notable, public, owner-created repos. Rules:
   - NEVER invent projects, years, or stacks — only use what the profile/repo pages state. If unsure, ask the owner.
   - Entry shape: `{ id: '01', title: 'NAME', stack: 'LANG · YEAR', href: 'https://github.com/...' }` — ids sequential two-digit strings, title uppercase.
3. Replace entries in `CELLS` (edit, minimal diff). Keep the grid 8 cells: fill with `null` holes — always keep at least one hole.
4. Update the section counter next to the "Projects." heading (`SELECTED ■ 0N`).
5. Keep the `Project` card component and `Hole` variants as-is (see `add-project` skill for the pattern).
6. Verify: `docker compose up -d --build web` then `curl -s localhost:8080` returns 200.
