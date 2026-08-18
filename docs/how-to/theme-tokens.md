# Theme token reference

Layers, from host override to what plugins should read:

| Layer | Who sets it | Who reads it |
|---|---|---|
| `--oscd-theme-*` | `customer-branding.css` on the host | `themes.ts` |
| `--oscd-theme-branding` | host CSS (optional brand id) | plugins (`@container style(...)`) |
| `--oscd-*` | `themes.ts` | OpenSCD and plugins |
| `--mdc-theme-*` | `themes.ts` (legacy) | old MWC / old plugins; do not use in new code |
| `--md-*` | `themes.ts` | Material Design 3 components |
| `--primary`, `--base03`, … | `themes.ts` (deprecated) | old plugins only |

`--oscd-theme-on-primary` does **not** change `--mdc-theme-on-primary`. That alias stays on `--oscd-base2`. App bar and tabs bind `--oscd-on-primary` locally.

## Semantic tokens

| `--oscd-theme-*` | `--oscd-*` | Default when unset | Light/dark |
|---|---|---|---|
| `--oscd-theme-primary` | `--oscd-primary` | `--oscd-cyan` | stable unless override uses `light-dark()` |
| `--oscd-theme-on-primary` | `--oscd-on-primary` | `--oscd-base2` | follows base2 unless overridden |
| `--oscd-theme-secondary` | `--oscd-secondary` | `--oscd-violet` | stable |
| `--oscd-theme-on-secondary` | `--oscd-on-secondary` | `--oscd-base2` | follows base2 unless overridden |
| `--oscd-theme-error` | `--oscd-error` | `#ff3d47` | stable |
| `--oscd-theme-on-error` | `--oscd-on-error` | `#073642` | stable (Solarized base02; fill does not invert) |
| `--oscd-theme-warning` | `--oscd-warning` | `#ffcc17` | stable |
| `--oscd-theme-on-warning` | `--oscd-on-warning` | `#073642` | stable (same reason) |
| `--oscd-theme-success` | `--oscd-success` | `#239c5b` | stable |
| `--oscd-theme-on-success` | `--oscd-on-success` | `#073642` | stable (same reason) |
| `--oscd-theme-paper` | `--oscd-paper` | `light-dark(#fff, #000)` | **swaps** (lightest ground) |
| `--oscd-theme-ink` | `--oscd-ink` | `light-dark(#000, #fff)` | **swaps** (darkest mark) |
| `--oscd-theme-nav-active` | `--oscd-nav-active` | `--oscd-on-primary` | follows on-primary |
| `--oscd-theme-body-bg` | (body only, set in JS) | `--oscd-theme-base2` then Solarized base2 | independent of `--oscd-base2` |
| `--oscd-theme-text-font` | `--oscd-text-font` | `'Roboto'` | — |
| `--oscd-theme-icon-font` | `--oscd-icon-font` | `'Material Icons'` | `--mdc-icon-font` defaults to Outlined if unset |
| `--oscd-theme-branding` | (none) | unset | string id, e.g. `Bearingpoint` |

`--oscd-paper` / `--oscd-ink` are not “always white / always black”. In dark mode paper is the dark ground and ink is the light mark.

## Palette tokens

`--oscd-theme-base03` … `--oscd-theme-base3` and `--oscd-theme-yellow` … `--oscd-theme-green` map 1:1 to `--oscd-base*` / `--oscd-yellow` … `--oscd-green`. Unset bases invert with `light-dark()` (Solarized). Accents stay fixed.

See `packages/openscd/src/themes.ts` for the exact hex fallbacks.
