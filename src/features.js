import { DEFAULT_FEATURES } from './features.defaults'

// ---------------------------------------------------------------------------
// Flag providers. Each returns a partial { flag: boolean }; later ones win.
// Add more providers here (remote JSON, edge config, ...) without touching
// components — they only ever read FEATURES.

// URL overrides for testing: ?contact=off&openToWork=on
function urlProvider() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const out = {}
  for (const key of Object.keys(DEFAULT_FEATURES)) {
    const v = params.get(key)?.toLowerCase()
    if (v == null) continue
    if (['1', 'true', 'on', 'yes'].includes(v)) out[key] = true
    else if (['0', 'false', 'off', 'no'].includes(v)) out[key] = false
  }
  return out
}

const providers = [() => DEFAULT_FEATURES, urlProvider]

export const FEATURES = Object.assign({}, ...providers.map((p) => p()))
