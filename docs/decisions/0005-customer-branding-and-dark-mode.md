# ADR-0005 — Customer branding tokens and a working light/dark split

Date: 2026-08-21

## Status

Proposed

## Current problems

### Server-side corporate design is hard to ship

`--oscd-theme-*` existed, but the contract was unclear: which tokens to set, how they relate to `--oscd-*` and `--mdc-*`, and how light/dark is supposed to work. There was no host or plugin how-to. Distros fell back to forking or monkey-patching `themes.js`.

### Dark mode is de facto not implementable

The in-tree light/dark switch is a 1:1 [Solarized](https://ethanschoonover.com/solarized/) inversion. That works only while nobody overrides the palette.

- Setting `--oscd-theme-base*` to a single colour **removes** the light/dark split.
- `--oscd-primary` / `--oscd-secondary` are usually **fixed** corporate colours, but there was no matching contrast token. On a very dark brand colour, an inverted surface such as `--oscd-base3` is unreadable as text.
- Only `--oscd-error` existed, defaulting to `--oscd-red`. Solarized red is not a signal colour. Brighter error / warning / success fills need their own `--oscd-on-*` pair.

Nobody appears to use this dark mode in production. Leaving it half-working costs plugin authors time until they discover it cannot be used.

There are two Options:
* Removing dark mode entirely would keep the model simple
* This ADR instead makes light/dark work without requiring every token to be overridden.

## Solutions

- Set `document.documentElement.style.colorScheme` from the Settings theme. CSS `light-dark(light, dark)` then follows the app switch, so hosts do not maintain two palettes.
- Add contrast pairs (fill + `on-*`). See [plugin-theming.md § Contrast](../how-to/plugin-theming.md#contrast).
- Document host branding in [customer-branding.md](../how-to/customer-branding.md) and plugin usage in [plugin-theming.md](../how-to/plugin-theming.md).

Existing `--oscd-*` names stay. `--mdc-theme-on-primary` remains `--oscd-base2` so old plugins that treated it as a surface do not change look. Hosts that need no branding override nothing.

## New variables

Host override is the same name with an `--oscd-theme-` prefix (except `--oscd-theme-branding` and `--oscd-theme-body-bg`, which have no extra `--oscd-*` alias).

| Key | Default | Description | Theme |
|---|---|---|---|
| `--oscd-gray-10` … `--oscd-gray-90` | Solarized-derived ramp (10 lightest, 90 darkest) | Fixed gray scale; does not invert. | Fixed |
| `--oscd-white` | `#ffffff` | Absolute white. | Fixed |
| `--oscd-black` | mix of gray-90 and `#000` | Absolute black. | Fixed |
| `--oscd-paper` | `light-dark(white, black)` | Lightest ground. | Light/Dark |
| `--oscd-ink` | `light-dark(black, white)` | Darkest mark. | Light/Dark |
| `--oscd-yellow` … `--oscd-green` | Solarized accents | Same hues as the old unprefixed `--yellow` … `--green`. | Fixed |
| `--oscd-on-primary` | `--oscd-gray-20` | Text/icons on `--oscd-primary`. | Either |
| `--oscd-on-secondary` | `--oscd-gray-20` | Text/icons on `--oscd-secondary`. | Either |
| `--oscd-primary-adaptive` | `--oscd-primary` | Primary on paper when a fixed brand colour is too dark or too light. | Either |
| `--oscd-on-primary-adaptive` | `--oscd-on-primary` | Text on primary-adaptive. | Either |
| `--oscd-secondary-adaptive` | `--oscd-secondary` | Secondary on paper. | Either |
| `--oscd-on-secondary-adaptive` | `--oscd-on-secondary` | Text on secondary-adaptive. | Either |
| `--oscd-nav-active` | `--oscd-on-primary` | Active editor-tab ink. | Either |
| `--oscd-on-error` | `--oscd-gray-90` | Text on `--oscd-error`. | Fixed |
| `--oscd-warning` | `#ffcc17` | Warning fill (signal colour). | Fixed |
| `--oscd-on-warning` | `--oscd-gray-90` | Text on warning. | Fixed |
| `--oscd-success` | `#239c5b` | Success fill (signal colour). | Fixed |
| `--oscd-on-success` | `--oscd-gray-90` | Text on success. | Fixed |
| `--oscd-theme-body-bg` | `--oscd-theme-base2` / Solarized base2 | Page background; independent of `--oscd-base2`. | Light/Dark |
| `--oscd-theme-branding` | unset | Optional host id for plugin `@container style()` fixes. | Fixed |

*Theme:* Fixed = same in light and dark. Light/Dark = follows `color-scheme`. Either = leave fixed when contrast is enough (default cyan); use `light-dark()` when the brand colour fails on paper.

## Changed variables

Nothing was removed.

| Key | Old default | New default | Description | Theme |
|---|---|---|---|---|
| `--oscd-error` | `--oscd-red` (`#dc322f`) | `#ff3d47` | Brighter signal red. Override `--oscd-theme-error` to keep Solarized red. | Fixed |

`--oscd-base*` defaults are still Solarized; they now invert via `color-scheme` + `light-dark()` instead of two palettes. Visual default is unchanged if the host does not override them.
