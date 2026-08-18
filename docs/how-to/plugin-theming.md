# Plugin theming

Plugins style themselves from the **resolved** `--oscd-*` tokens the host publishes.
Do not set `--oscd-theme-*` inside a production plugin. That layer belongs to the server (`customer-branding.css`).

Token catalog: [theme-tokens.md](./theme-tokens.md).
Host setup: [customer-branding.md](./customer-branding.md).

## What to read

| Use | Token |
|---|---|
| Brand fill | `--oscd-primary`, `--oscd-secondary` |
| Text on that fill | `--oscd-on-primary`, `--oscd-on-secondary` |
| Surfaces / body text | `--oscd-base3` … `--oscd-base03`, `--oscd-base00` |
| Lightest ground / darkest mark | `--oscd-paper`, `--oscd-ink` |
| Status | `--oscd-error`, `--oscd-warning`, `--oscd-success` and their `--oscd-on-*` |
| Fonts | `--oscd-text-font`, `--oscd-icon-font` |

Do **not** use `--mdc-theme-*` in new plugin code. `--mdc-theme-on-primary` is frozen to `--oscd-base2` because existing plugins treat it as a surface. It is not “text on primary”. These aliases may be removed.

## Old hosts

Older OpenSCD / CoMPAS builds set `--primary` and `--cyan` but often leave `--oscd-primary` on cyan, and they omit `--oscd-on-primary`, `--oscd-paper`, `--oscd-warning`, and the accent `--oscd-*` names.

Fill gaps with a plugin-local prefix. Do not write back onto `--oscd-*`:

```css
:host {
  --oscdfix-primary: var(--oscd-theme-primary, var(--primary, var(--oscd-primary)));
  --oscdfix-on-primary: var(--oscd-on-primary, #ffffff);
  --oscdfix-paper: var(--oscd-paper, #ffffff);
  --oscdfix-ink: var(--oscd-ink, #000000);
  --oscdfix-yellow: var(--oscd-yellow, var(--yellow, #b58900));
}
```

Map your internal names from `--oscdfix-*`.

## Brand-specific fixes

If the host sets `--oscd-theme-branding` (see [customer-branding.md](./customer-branding.md)), target one server:

```css
@container style(--oscd-theme-branding: Bearingpoint) {
  /* ... */
}
```

On hosts that do not set that id, detect an old build with `style(--oscd-on-primary: initial)` plus a brand color you already know. Do not key off hex values alone: a new host with the same primary would match.
