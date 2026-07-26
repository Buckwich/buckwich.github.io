# Feature flags

Sections of the site can be toggled without code changes. Components never hard-code
toggleable content — they read `FEATURES` from `src/features.js`.

## Current flags

| Flag | Default | Controls |
|---|---|---|
| `contact` | `true` | "Get in touch" section (heading, email button, link grid) + CONTACT nav link |
| `openToWork` | `false` | "OPEN TO WORK" badge in the hero |

## Toggling

**1. GitHub UI (production, no code edits)**
Repo → **Actions → Toggle features → Run workflow** → check/uncheck → Run.
The workflow rewrites `src/features.defaults.js`, commits to `main`, and triggers a
Pages rebuild. Live in ~1 minute.

**2. Config file (commit)**
Edit `src/features.defaults.js` and push:

```js
export const DEFAULT_FEATURES = {
  contact: true,
  openToWork: false,
}
```

**3. URL params (local preview only, not persisted)**
Override per visitor for testing — e.g. `https://buckwich.de/?contact=off&openToWork=on`.
Accepted values: `on/off`, `true/false`, `1/0`, `yes/no`. Only known flag names are read.

## How it works

`src/features.js` resolves flags through a provider chain (later providers win):

1. `DEFAULT_FEATURES` from `src/features.defaults.js` (build-time defaults)
2. `urlProvider` (runtime URL overrides)
3. …future providers (remote JSON, edge config) plug in here — components don't change

## Adding a new flag

1. Add `myFlag: true|false` to `src/features.defaults.js` (with a comment).
2. Add a matching boolean input to `.github/workflows/toggle-features.yml`
   (inputs + the `printf` line).
3. Use `FEATURES.myFlag` in the component (`import { FEATURES } from '../features'`).
4. Update the table above.
