# Plugin theming

Style plugins from the **resolved** `--oscd-*` tokens the host publishes.
Do not set `--oscd-theme-*` inside a production plugin. That layer belongs to the host ([customer-branding.md](./customer-branding.md)).

Old-host workarounds and brand-id queries: [plugin-theming-advanced.md](./plugin-theming-advanced.md).

## Quick start

**Prefer the [Solarized](https://ethanschoonover.com/solarized/) palette (`--oscd-base03` … `--oscd-base3`) together with `--oscd-primary` and `--oscd-secondary`.** That is the main set plugins should consume: surfaces and text from the [Solarized](https://ethanschoonover.com/solarized/) bases, brand fills from primary / secondary (and their `on-*` contrast tokens).

| Use | Tokens | Description |
|---|---|---|
| Surfaces and body text | `--oscd-base03` … `--oscd-base3` | [Solarized](https://ethanschoonover.com/solarized/) scale; inverts in dark mode. Main palette for plugins. |
| Accent colours | `--oscd-yellow`, `--oscd-orange`, `--oscd-red`, `--oscd-magenta`, `--oscd-violet`, `--oscd-blue`, `--oscd-cyan`, `--oscd-green` | [Solarized](https://ethanschoonover.com/solarized/) accents; stay the same in light and dark. |
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
| `--oscd-base03` | `light-dark(gray-90, gray-10)` | [Solarized](https://ethanschoonover.com/solarized/) base03. | Light/Dark |
| `--oscd-base02` | `light-dark(gray-80, gray-20)` | [Solarized](https://ethanschoonover.com/solarized/) base02. | Light/Dark |
| `--oscd-base01` | `light-dark(gray-70, gray-30)` | [Solarized](https://ethanschoonover.com/solarized/) base01. | Light/Dark |
| `--oscd-base00` | `light-dark(gray-60, gray-40)` | [Solarized](https://ethanschoonover.com/solarized/) body text. | Light/Dark |
| `--oscd-base0` | `light-dark(gray-40, gray-60)` | [Solarized](https://ethanschoonover.com/solarized/) base0. | Light/Dark |
| `--oscd-base1` | `light-dark(gray-30, gray-70)` | [Solarized](https://ethanschoonover.com/solarized/) base1. | Light/Dark |
| `--oscd-base2` | `light-dark(gray-20, gray-80)` | [Solarized](https://ethanschoonover.com/solarized/) UI surface. | Light/Dark |
| `--oscd-base3` | `light-dark(gray-10, gray-90)` | [Solarized](https://ethanschoonover.com/solarized/) lightest/darkest surface. | Light/Dark |
| `--oscd-yellow` | `#b58900` | [Solarized](https://ethanschoonover.com/solarized/) yellow. | Fixed |
| `--oscd-orange` | `#cb4b16` | [Solarized](https://ethanschoonover.com/solarized/) orange. | Fixed |
| `--oscd-red` | `#dc322f` | [Solarized](https://ethanschoonover.com/solarized/) red. | Fixed |
| `--oscd-magenta` | `#d33682` | [Solarized](https://ethanschoonover.com/solarized/) magenta. | Fixed |
| `--oscd-violet` | `#6c71c4` | [Solarized](https://ethanschoonover.com/solarized/) violet. | Fixed |
| `--oscd-blue` | `#268bd2` | [Solarized](https://ethanschoonover.com/solarized/) blue. | Fixed |
| `--oscd-cyan` | `#2aa198` | [Solarized](https://ethanschoonover.com/solarized/) cyan. | Fixed |
| `--oscd-green` | `#859900` | [Solarized](https://ethanschoonover.com/solarized/) green. | Fixed |
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

Prefer the [Solarized](https://ethanschoonover.com/solarized/) `--oscd-base*` tokens: they already invert.

## `color-mix`

Need more steps than the named tokens? Mix them instead of new hexes:

```css
color-mix(in oklab, var(--oscd-gray-90) 50%, #000)
```

## Contrast

Always pair a **fill** with its **contrast** token. Do not invent a third colour for text on a branded fill.

| Fill (background) | Contrast (text / icon) | Description |
|---|---|---|
| `--oscd-primary` | `--oscd-on-primary` | Fixed (same in light and dark by default) |
| `--oscd-primary-adaptive` | `--oscd-on-primary-adaptive` | Either: defaults to the primary pair; host may use `light-dark()` |
| `--oscd-secondary` | `--oscd-on-secondary` | Fixed (same in light and dark by default) |
| `--oscd-secondary-adaptive` | `--oscd-on-secondary-adaptive` | Either: defaults to the secondary pair; host may use `light-dark()` |
| `--oscd-error` | `--oscd-on-error` | Fixed |
| `--oscd-warning` | `--oscd-on-warning` | Fixed |
| `--oscd-success` | `--oscd-on-success` | Fixed |
| `--oscd-paper` | `--oscd-ink` | Light/Dark (roles swap) |
| `--oscd-base3` | `--oscd-base00` | Light/Dark. Example of the 4-step minimum on the [Solarized](https://ethanschoonover.com/solarized/) ramp |
| `--oscd-base1` | `--oscd-base02` | Light/Dark. Example of the 4-step minimum on the [Solarized](https://ethanschoonover.com/solarized/) ramp |
| `--oscd-gray-20` | `--oscd-gray-60` | Fixed. Example of the 4-step (40) minimum on the gray ramp |
| `--oscd-white` | `--oscd-black` | Fixed (absolute poles; do not swap) |

`--oscd-nav-active` is ink **on** `--oscd-primary` (same role as `--oscd-on-primary` by default), not a fill of its own.

For a button: fill as `background`, contrast token as `color`, and the **same contrast token** as `border-color`. That stays visible in both modes and with unknown host branding.

### Gray scale vs [Solarized](https://ethanschoonover.com/solarized/) bases

`--oscd-gray-10` … `--oscd-gray-90` is a **fixed** ramp (10 = lightest, 90 = darkest). It does not invert.

`--oscd-base03` … `--oscd-base3` is the same ramp **folded through** `light-dark()`, so plugins can keep using `base3` as “surface” and `base00` as “body text” in both modes.

| Step | `--oscd-gray-*` (fixed) | `--oscd-base*` in light | `--oscd-base*` in dark |
|---|---|---|---|
| 10 lightest | `--oscd-gray-10` | `--oscd-base3` | `--oscd-base03` |
| 20 | `--oscd-gray-20` | `--oscd-base2` | `--oscd-base02` |
| 30 | `--oscd-gray-30` | `--oscd-base1` | `--oscd-base01` |
| 40 | `--oscd-gray-40` | `--oscd-base0` | `--oscd-base00` |
| 50 | `--oscd-gray-50` | — | — |
| 60 | `--oscd-gray-60` | `--oscd-base00` | `--oscd-base0` |
| 70 | `--oscd-gray-70` | `--oscd-base01` | `--oscd-base1` |
| 80 | `--oscd-gray-80` | `--oscd-base02` | `--oscd-base2` |
| 90 darkest | `--oscd-gray-90` | `--oscd-base03` | `--oscd-base3` |

**Minimum gap: 4 steps (40 on the 10–90 scale).** Adjacent steps (for example `--oscd-gray-20` with `--oscd-gray-30`) are not enough for text.

Example: background `--oscd-gray-20`, text `--oscd-gray-60` (gap 40). That is the same pairing as `--oscd-base2` / `--oscd-base00` in light mode. `--oscd-gray-20` with `--oscd-gray-40` (gap 20) is too close.

Prefer `--oscd-base*` over raw `--oscd-gray-*` so the pair still works after dark mode inverts the scale.

## What not to do

Unprefixed tokens (`--primary`, `--base03`, `--cyan`, …) exist only for compatibility and will be removed. Do not use `--mdc-*` or `--md-*`; each plugin must configure its own component library.

Old hosts and `--oscd-theme-branding`: [plugin-theming-advanced.md](./plugin-theming-advanced.md).
