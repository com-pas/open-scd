# Customer branding — advanced

Back to [customer-branding.md](./customer-branding.md).

## Plugin catalog

Built-in plugins are listed in [`packages/openscd/src/plugins.ts`](../../packages/openscd/src/plugins.ts). A fork can add, replace, or only flip `activeByDefault`.

Third-party plugins published on GitHub Pages can be shipped **offline** with the distribution by adding them as git submodules (`.gitmodules`) and pointing the catalog at the local copies.

CoMPAS forks often use `public/js/plugins.js` for the same catalog. Treat it as product configuration, not as a theme file.

## Toolbar and menus

The top app bar, editor tabs, and side drawer are rendered by [`packages/openscd/src/addons/Layout.ts`](../../packages/openscd/src/addons/Layout.ts) (or `CompasLayout.ts` in CoMPAS). Override that component for a logo or extra header slots.

Keep **colours** in `customer-branding.css` (`--oscd-theme-on-primary`, `--oscd-theme-nav-active`). Put static assets (logo PNGs) in `public/` and reference them with a root-absolute URL (`/public/brand-logo.png`), not `../../public/...`.
