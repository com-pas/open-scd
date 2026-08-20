# Plugin theming

Style plugins from the **resolved** `--oscd-*` tokens the host publishes.
Do not set `--oscd-theme-*` inside a production plugin. That layer belongs to the host ([customer-branding.md](./customer-branding.md)).

Old-host workarounds and brand-id queries: [plugin-theming-advanced.md](./plugin-theming-advanced.md).

## Quick start

Prefer the Solarized bases and the primary / secondary pairs. That is enough for surfaces, text, app-bar-like fills, and landing-style actions.

| Use | Tokens | Description |
|---|---|---|
| Surfaces and body text | `--oscd-base03` … `--oscd-base3`, especially `--oscd-base00` | Solarized scale; inverts in dark mode. Main palette for plugins. |
| Brand fill | `--oscd-primary`, `--oscd-secondary` | App-bar / accent fills. Default cyan / violet stay the same in light and dark. |
| Text on that fill | `--oscd-on-primary`, `--oscd-on-secondary` | Contrast on primary / secondary. |
| Brand on paper | `--oscd-primary-adaptive`, `--oscd-on-primary-adaptive` (same for secondary) | Use when a very dark or very light brand colour fails on black/white paper. Defaults equal the fixed primary pair. |
| Page poles | `--oscd-paper`, `--oscd-ink` | Lightest ground / darkest mark; they swap in dark mode. |
| Status | `--oscd-error`, `--oscd-warning`, `--oscd-success` and `--oscd-on-*` | Bright fills; on-* stays dark (`gray-90`). |
| Fonts | `--oscd-text-font`, `--oscd-icon-font` | Host text and icon fonts. |

Do **not** use `--mdc-theme-*` or `--md-*` in new plugin code. `--mdc-theme-on-primary` is frozen to `--oscd-base2` (a surface, not “text on primary”).

## `--oscd-*` tokens

| Key | Default | Description | Theme |
|---|---|---|---|
| `--oscd-gray-10` | `#fdf6e3` | Lightest gray. | Fixed |
| `--oscd-gray-20` | `#eee8d5` | Gray step. | Fixed |
| `--oscd-gray-30` | `#93a1a1` | Gray step. | Fixed |
| `--oscd-gray-40` | `#839496` | Gray step. | Fixed |
| `--oscd-gray-50` | mix of gray-40/60 | Mid gray. | Fixed |
| `--oscd-gray-60` | `#657b83` | Gray step. | Fixed |
| `--oscd-gray-70` | `#586e75` | Gray step. | Fixed |
| `--oscd-gray-80` | `#073642` | Gray step. | Fixed |
| `--oscd-gray-90` | `#002b36` | Darkest gray. | Fixed |
| `--oscd-white` | `#ffffff` | Absolute white. | Fixed |
| `--oscd-black` | mix of gray-90 and `#000` | Absolute black. | Fixed |
| `--oscd-paper` | `light-dark(white, black)` | Lightest ground. | Light/Dark |
| `--oscd-ink` | `light-dark(black, white)` | Darkest mark. | Light/Dark |
| `--oscd-base03` | `light-dark(gray-90, gray-10)` | Solarized base03. | Light/Dark |
| `--oscd-base02` | `light-dark(gray-80, gray-20)` | Solarized base02. | Light/Dark |
| `--oscd-base01` | `light-dark(gray-70, gray-30)` | Solarized base01. | Light/Dark |
| `--oscd-base00` | `light-dark(gray-60, gray-40)` | Solarized body text. | Light/Dark |
| `--oscd-base0` | `light-dark(gray-40, gray-60)` | Solarized base0. | Light/Dark |
| `--oscd-base1` | `light-dark(gray-30, gray-70)` | Solarized base1. | Light/Dark |
| `--oscd-base2` | `light-dark(gray-20, gray-80)` | Solarized UI surface. | Light/Dark |
| `--oscd-base3` | `light-dark(gray-10, gray-90)` | Solarized lightest/darkest surface. | Light/Dark |
| `--oscd-yellow` | `#b58900` | Solarized yellow. | Fixed |
| `--oscd-orange` | `#cb4b16` | Solarized orange. | Fixed |
| `--oscd-red` | `#dc322f` | Solarized red. | Fixed |
| `--oscd-magenta` | `#d33682` | Solarized magenta. | Fixed |
| `--oscd-violet` | `#6c71c4` | Solarized violet. | Fixed |
| `--oscd-blue` | `#268bd2` | Solarized blue. | Fixed |
| `--oscd-cyan` | `#2aa198` | Solarized cyan. | Fixed |
| `--oscd-green` | `#859900` | Solarized green. | Fixed |
| `--oscd-primary` | `--oscd-cyan` | Brand fill. | Either |
| `--oscd-on-primary` | `--oscd-gray-20` | Text on primary. | Either |
| `--oscd-primary-adaptive` | `--oscd-primary` | Primary on paper; host may vary light/dark. | Either |
| `--oscd-on-primary-adaptive` | `--oscd-on-primary` | Text on primary-adaptive. | Either |
| `--oscd-secondary` | `--oscd-violet` | Second brand fill. | Either |
| `--oscd-on-secondary` | `--oscd-gray-20` | Text on secondary. | Either |
| `--oscd-secondary-adaptive` | `--oscd-secondary` | Secondary on paper. | Either |
| `--oscd-on-secondary-adaptive` | `--oscd-on-secondary` | Text on secondary-adaptive. | Either |
| `--oscd-nav-active` | `--oscd-on-primary` | Active editor tab. | Either |
| `--oscd-error` | `#ff3d47` | Error fill. | Fixed |
| `--oscd-on-error` | `--oscd-gray-90` | Text on error. | Fixed |
| `--oscd-warning` | `#ffcc17` | Warning fill. | Fixed |
| `--oscd-on-warning` | `--oscd-gray-90` | Text on warning. | Fixed |
| `--oscd-success` | `#239c5b` | Success fill. | Fixed |
| `--oscd-on-success` | `--oscd-gray-90` | Text on success. | Fixed |
| `--oscd-text-font` | `'Roboto'` | Text font. | Fixed |
| `--oscd-icon-font` | `'Material Icons'` | Icon font. | Fixed |

Defaults come from the host `themes.ts`. `--oscd-theme-*` is host-only; do not set it in the plugin.

## Light / dark support

The host sets `color-scheme` on `<html>`. Use CSS `light-dark(light, dark)` when a plugin-local value must follow the app setting:

```css
background: light-dark(var(--oscd-base3), var(--oscd-base03));
```

Prefer the Solarized `--oscd-base*` tokens: they already invert.

## `color-mix`

Need more steps than the named tokens? Mix them instead of new hexes:

```css
color-mix(in oklab, var(--oscd-gray-90) 50%, #000)
```

## Contrast

Always pair a fill with its contrast token: `--oscd-primary` with `--oscd-on-primary`, `--oscd-error` with `--oscd-on-error`, `--oscd-base3` with `--oscd-base00`. For a button, use the fill as background, the `on-*` token as text, and the **same text colour** as the border. That stays visible in both modes and with unknown host branding.

## What not to do

Unprefixed tokens (`--primary`, `--base03`, `--cyan`, …) exist only for compatibility and will be removed. Do not use `--mdc-*` or `--md-*`; each plugin must configure its own component library.

Old hosts and `--oscd-theme-branding`: [plugin-theming-advanced.md](./plugin-theming-advanced.md).
