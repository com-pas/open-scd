# Customer branding — advanced

Back to [customer-branding.md](./customer-branding.md).

This page is for **distribution builders**. Palette, fonts, and shape stay in `customer-branding.css` (`--oscd-theme-*` for plugins, `--oscd-compas-theme-*` for host chrome). Use this page for everything that is **not** a color token: which plugins ship, how third-party plugins get into the bundle, toolbar/logo, and an optional high-contrast variant.

## Plugin catalog

The host decides which plugins load. That list is product configuration, **not** a theme file.

| Distro | Catalog |
|---|---|
| OpenSCD / this fork | [`packages/openscd/src/plugins.ts`](../../packages/openscd/src/plugins.ts) |
| Typical CoMPAS distro | `public/js/plugins.js` |

A fork can add a plugin, replace one, or only flip `activeByDefault`.

## Shipping third-party plugins offline

Plugins published on GitHub Pages can ship **with** the distribution (offline) as git submodules (`.gitmodules`). Point the catalog at those local copies.

> [!WARNING]
> A git submodule is not a strong integrity guarantee. Git pins a commit SHA, but the next `submodule update` (or CI that fetches the branch tip) can pull a rewritten `gh-pages` / `deploy` branch. A compromised remote can replace the JavaScript the next release ships.
>
> BearingPoint is developing a download script that fetches each plugin entry (`index.js`) and checks it against a known hash, so unexpected changes cannot enter the distribution.

## Toolbar, logo, and menus

The app bar, editor tabs, and side drawer are rendered by [`packages/openscd/src/addons/Layout.ts`](../../packages/openscd/src/addons/Layout.ts) (or `CompasLayout.ts` in CoMPAS).

| What | Where |
|---|---|
| Colors | `customer-branding.css`: `--oscd-compas-theme-nav-primary`, `--oscd-compas-theme-nav-primary-active`, `--oscd-compas-theme-nav-primary-text`, `--oscd-compas-theme-nav-primary-text-active`, `--oscd-compas-theme-body-bg`. **Host only** — plugins must not read them. |
| Logo / extra header slots | Override the layout component. |
| Static assets | `public/`, referenced with a root-absolute URL (`/public/brand-logo.png`), not `../../public/...`. |

## High-contrast variant

Optional. When the OS asks for more contrast, override the **same** `--oscd-theme-*` and `--oscd-compas-theme-*` tokens. Keep the [4-step Solarized gap](./plugin-theming.md#contrast).

```css
@media (prefers-contrast: more) {
  :root {
    --oscd-theme-primary: light-dark(#100, #fee);
    --oscd-theme-secondary: light-dark(#600, #fbb);

    --oscd-theme-base03: light-dark(#000000, #ffffff);
    --oscd-theme-base02: light-dark(#140e0a, #f7f4f3);
    --oscd-theme-base01: light-dark(#241914, #dbd5d1);
    --oscd-theme-base00: light-dark(#3b2a21, #987e71);
    --oscd-theme-base0: light-dark(#987e71, #3b2a21);
    --oscd-theme-base1: light-dark(#dbd5d1, #241914);
    --oscd-theme-base2: light-dark(#f7f4f3, #140e0a);
    --oscd-theme-base3: light-dark(#ffffff, #000000);

    --oscd-compas-theme-body-bg: var(--oscd-theme-base3);
    --oscd-compas-theme-nav-primary: #000;
    --oscd-compas-theme-nav-primary-active: #300;
    --oscd-compas-theme-nav-primary-text: #fff;
    --oscd-compas-theme-nav-primary-text-active: color-mix(in srgb, yellow 70%, white);
  }
}
```
