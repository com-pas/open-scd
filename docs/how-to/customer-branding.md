# Customer branding

Brand an OpenSCD or CoMPAS host without changing `themes.ts`.
Set only `--oscd-theme-*` in CSS. Plugins read the resolved `--oscd-*` tokens.

Plugin authors: [plugin-theming.md](./plugin-theming.md).  
Toolbar, catalog, git modules: [customer-branding-advanced.md](./customer-branding-advanced.md).

## Quick start

Fork OpenSCD or CoMPAS and edit `packages/distribution/public/css/customer-branding.css` (or the fork equivalent). Load it from `index.html` **after** `normalize.css` and **before** the app.

Unset tokens keep the defaults from `themes.ts`.

```css
:root {
  /* Gray scale */
  --oscd-theme-gray-10: #faf8f7; /* lightest */
  --oscd-theme-gray-20: #e6deda;
  --oscd-theme-gray-30: #ccc1bc;
  --oscd-theme-gray-40: #b2a59f;
  --oscd-theme-gray-50: #98847a;
  --oscd-theme-gray-60: #806659;
  --oscd-theme-gray-70: #735c50;
  --oscd-theme-gray-80: #665247;
  --oscd-theme-gray-90: #5a473e; /* darkest */

  /* Primary and secondary colors */
  --oscd-theme-primary: #550000;
  --oscd-theme-secondary: var(--oscd-theme-gray-50);

  /* Body background: in dark mode, a little darker than the darkest gray */
  --oscd-theme-body-bg: light-dark(#fff, color-mix(in oklab, var(--oscd-theme-gray-90) 50%, #000));
}
```

Use `light-dark(light, dark)` when a value should follow the app light/dark setting. Omit it for a colour that stays the same in both modes (typical for `--oscd-theme-primary` when cyan-like contrast is enough).

## `--oscd-theme-*` tokens

| Key | Default | Description | Theme |
|---|---|---|---|
| `--oscd-theme-gray-10` | `#fdf6e3` | Lightest gray. Do not invert. | Fixed |
| `--oscd-theme-gray-20` | `#eee8d5` | Gray step. | Fixed |
| `--oscd-theme-gray-30` | `#93a1a1` | Gray step. | Fixed |
| `--oscd-theme-gray-40` | `#839496` | Gray step. | Fixed |
| `--oscd-theme-gray-50` | `color-mix(in oklab, #839496 50%, #657b83)` | Mid gray. | Fixed |
| `--oscd-theme-gray-60` | `#657b83` | Gray step. | Fixed |
| `--oscd-theme-gray-70` | `#586e75` | Gray step. | Fixed |
| `--oscd-theme-gray-80` | `#073642` | Gray step. | Fixed |
| `--oscd-theme-gray-90` | `#002b36` | Darkest gray. Do not invert. | Fixed |
| `--oscd-theme-white` | `#ffffff` | Lightest white. Fixed; does not swap in dark mode. | Fixed |
| `--oscd-theme-black` | `color-mix(in oklab, var(--oscd-gray-90) 50%, #000)` | Darkest black (slightly darker than gray-90). | Fixed |
| `--oscd-theme-paper` | `light-dark(white, black)` | Lightest ground (page/card). Swaps in dark mode. | Light/Dark |
| `--oscd-theme-ink` | `light-dark(black, white)` | Darkest mark (text). Swaps in dark mode. | Light/Dark |
| `--oscd-theme-base03` … `--oscd-theme-base3` | `light-dark(gray-90, gray-10)` … (see Solarized) | Plugin-facing Solarized scale. Inverts in dark mode. | Light/Dark |
| `--oscd-theme-yellow` | `#b58900` | Solarized yellow. | Fixed |
| `--oscd-theme-orange` | `#cb4b16` | Solarized orange. | Fixed |
| `--oscd-theme-red` | `#dc322f` | Solarized red. | Fixed |
| `--oscd-theme-magenta` | `#d33682` | Solarized magenta. | Fixed |
| `--oscd-theme-violet` | `#6c71c4` | Solarized violet. | Fixed |
| `--oscd-theme-blue` | `#268bd2` | Solarized blue. | Fixed |
| `--oscd-theme-cyan` | `#2aa198` | Solarized cyan (default primary). | Fixed |
| `--oscd-theme-green` | `#859900` | Solarized green. | Fixed |
| `--oscd-theme-primary` | `--oscd-cyan` | Brand fill (app bar). | Either |
| `--oscd-theme-on-primary` | `--oscd-gray-20` | Text/icons on primary. | Either |
| `--oscd-theme-primary-adaptive` | `--oscd-primary` | Primary used on paper; may follow light/dark if the brand colour is too dark or too light. | Either |
| `--oscd-theme-on-primary-adaptive` | `--oscd-on-primary` | Text on `--oscd-primary-adaptive`. | Either |
| `--oscd-theme-secondary` | `--oscd-violet` | Second brand fill (landing tiles). | Either |
| `--oscd-theme-on-secondary` | `--oscd-gray-20` | Text/icons on secondary. | Either |
| `--oscd-theme-secondary-adaptive` | `--oscd-secondary` | Secondary on paper; may follow light/dark. | Either |
| `--oscd-theme-on-secondary-adaptive` | `--oscd-on-secondary` | Text on `--oscd-secondary-adaptive`. | Either |
| `--oscd-theme-nav-active` | `--oscd-on-primary` | Active editor-tab ink. | Either |
| `--oscd-theme-body-bg` | `--oscd-theme-base2` then Solarized base2 | Page background behind the app. Independent of `--oscd-base2`. | Light/Dark |
| `--oscd-theme-error` | `#ff3d47` | Error fill. Bright in both modes. | Fixed |
| `--oscd-theme-on-error` | `--oscd-gray-90` | Text on error. | Fixed |
| `--oscd-theme-warning` | `#ffcc17` | Warning fill. | Fixed |
| `--oscd-theme-on-warning` | `--oscd-gray-90` | Text on warning. | Fixed |
| `--oscd-theme-success` | `#239c5b` | Success fill. | Fixed |
| `--oscd-theme-on-success` | `--oscd-gray-90` | Text on success. | Fixed |
| `--oscd-theme-text-font` | `'Roboto'` | UI text font. | Fixed |
| `--oscd-theme-icon-font` | `'Material Icons'` | Icon font (`--mdc-icon-font` still defaults to Outlined if this is unset). | Fixed |
| `--oscd-theme-branding` | unset | Optional brand id for plugin `@container style()` fixes. | Fixed |

**Theme column:** *Fixed* = same in light and dark. *Light/Dark* = follows `color-scheme` (usually via `light-dark()`). *Either* = leave fixed when contrast is enough (default cyan); use `light-dark()` when the brand colour is too dark or too light on paper.

## General tokens

`--oscd-theme-gray-10` … `--oscd-theme-gray-90` are a **fixed ramp**: 10 is lightest, 90 is darkest. Do not invert this scale. Dark mode uses the same numbers; Solarized `--oscd-theme-base*` maps them through `light-dark()`.

`--oscd-theme-white` / `--oscd-theme-black` are the absolute poles (always white / always black). They do not swap.

`--oscd-theme-paper` / `--oscd-theme-ink` are the **roles** “lightest ground” and “darkest mark”. They swap in dark mode (`paper` becomes the dark ground). Defaults: `light-dark(var(--oscd-white), var(--oscd-black))` and the reverse.

## System tokens

**Primary / secondary** are brand fills. `--oscd-theme-on-primary` / `--oscd-theme-on-secondary` are the text on those fills.

Keep `--oscd-theme-primary` **fixed** when it has contrast on both light and dark paper (OpenSCD cyan does). If the brand colour is very dark or very light, set `--oscd-theme-primary-adaptive` (and `--oscd-theme-on-primary-adaptive`) with `light-dark()` so links and icons on the page stay readable. The app bar can stay on the fixed `--oscd-theme-primary`.

**`--oscd-theme-nav-active`** is the active editor-tab label/indicator. Default: `--oscd-on-primary`.

**`--oscd-theme-body-bg`** is the page background behind the shell. It is independent of `--oscd-theme-base2` so the canvas can differ from UI surfaces.

A labelled start-screen colour map will be added here.

## Solarized palette

Plugins should treat `--oscd-base03` … `--oscd-base3` and the accent colours as the main palette. Defaults follow [Ethan Schoonover’s Solarized](https://ethanschoonover.com/solarized/). Dark mode inverts the base scale (`base3` is the lightest surface in light mode and the darkest in dark mode). Accents stay fixed.

Override with `--oscd-theme-base03` … `--oscd-theme-base3` and `--oscd-theme-yellow` … `--oscd-theme-green` only when the gray ramp is not enough.

## Fonts

`--oscd-theme-text-font` (default `'Roboto'`) and `--oscd-theme-icon-font` (default `'Material Icons'`). Load the font files from `public/` (or your fork’s static folder) if you change them.

## Marker property

`--oscd-theme-branding` is an optional id (no spaces), for example `Bearingpoint`. Plugin authors can ship brand-specific CSS **before** the host is upgraded:

```css
@container style(--oscd-theme-branding: Bearingpoint) {
  /* temporary host fixes */
}
```

Leave it unset on stock OpenSCD.

## Light / dark support

`themes.ts` sets `color-scheme` on `<html>` from the Settings light/dark switch. CSS `light-dark(light, dark)` then picks the first colour in light mode and the second in dark mode:

```css
--oscd-theme-body-bg: light-dark(#ffffff, #000000);
```

Omit `light-dark()` for a value that must stay the same in both modes.

## `color-mix`

For extra steps on the gray ramp (or a darker body in dark mode), mix existing tokens instead of inventing new hexes:

```css
color-mix(in oklab, var(--oscd-theme-gray-90) 50%, #000)
```

## What not to do

Do **not** set component-library variables (`--mdc-*`, `--md-sys-*`, `--md-*`). Each plugin may use a different library or version. Those mappings in `themes.ts` exist only for compatibility and may go away. Plugins must configure their own component library.

Do **not** set `--oscd-*` here. That layer is resolved by `themes.ts` from `--oscd-theme-*`.

More (plugin catalog, git modules, toolbar/logo): [customer-branding-advanced.md](./customer-branding-advanced.md).
