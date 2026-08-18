# Customer branding (host / server)

Brand an OpenSCD or CoMPAS host without forking `themes.ts`.
Plugins consume the resolved `--oscd-*` tokens; they must not set `--oscd-theme-*`.

Token names and defaults: [theme-tokens.md](./theme-tokens.md).
Plugin authors: [plugin-theming.md](./plugin-theming.md).

## 1. Theme CSS

Add `packages/distribution/public/css/customer-branding.css` (or the fork equivalent) and load it from `index.html` **after** `normalize.css` and **before** the app module.

Set **only** `--oscd-theme-*` there. Unset tokens keep the Solarized defaults from `themes.ts`.

```css
* {
  --oscd-theme-branding: Bearingpoint;

  --oscd-theme-primary: #330000;
  --oscd-theme-on-primary: #ffffff;
  --oscd-theme-nav-active: #ffffff;

  --oscd-theme-body-bg: light-dark(#ffffff, #330000);
  --oscd-theme-paper: light-dark(#ffffff, #330000);
  --oscd-theme-ink: light-dark(#330000, #ffffff);
}
```

- Use `light-dark(light, dark)` when the value should follow the app light/dark setting.
- Omit `light-dark()` for a color that stays the same in both modes (typical for `--oscd-theme-primary`).
- `--oscd-theme-paper` is the lightest ground, `--oscd-theme-ink` the darkest mark. They swap in dark mode; they are not always `#fff` / `#000`.
- `--oscd-theme-body-bg` is independent of `--oscd-theme-base2` (page background vs UI surfaces).
- Do not set `--oscd-*`, `--mdc-*`, or `--md-*` here.

### Brand id for plugin fixes

Set `--oscd-theme-branding` to a short name (no spaces). Plugins can then target one host:

```css
@container style(--oscd-theme-branding: Bearingpoint) {
  /* brand-specific fallbacks on old or mixed hosts */
}
```

Leave it unset on stock OpenSCD.

## 2. Plugin catalog (`plugins.js`)

Server-side branding is more than colors. The host catalog (`public/js/plugins.js` in CoMPAS forks, or the distribution plugin list) chooses which editors, menu entries, and default-on plugins ship with that brand.

Treat that file as product configuration, not as a theme file. Typical brand work:

- add or hide vendor plugins
- change default `active` flags
- point Plugin Hub / store URLs at the brand’s feed

Document those changes next to the CSS in the fork’s release notes.

## 3. Toolbar and logo (`Layout` / `CompasLayout`)

Logos, centered titles, and extra header slots belong in the layout component (`CompasLayout.ts` in CoMPAS). Keep **colors** out of that file: drive tab ink and title contrast through `--oscd-theme-on-primary` and `--oscd-theme-nav-active`.

Use root-absolute asset URLs (`/public/brand-logo.png`), not `../../public/...`.
