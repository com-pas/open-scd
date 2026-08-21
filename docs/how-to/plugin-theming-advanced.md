# Plugin theming — advanced

Back to [plugin-theming.md](./plugin-theming.md).

## Workaround for old hosts

New plugins can use `--oscd-*` and still run on older OpenSCD / CoMPAS builds that do not publish the full set. Not everything maps 1:1; **dark mode on old hosts was never complete**.

If `--oscd-on-primary` is missing, the host is old: fill the missing tokens. For dark mode, also match Solarized `--base03: #fdf6e3` and hope the host did not restyle that default.

```css
/* old Open-SCD didn't set --oscd-on-primary and others => missing values must be faked. */
@container style(--oscd-on-primary: initial) {
  * {
    /* ========== Gray-Skala (from '--oscd-base*' Light-Mode) ========== */
    --oscd-gray-10: var(--oscd-base3, #fdf6e3); /* lightest */
    --oscd-gray-20: var(--oscd-base2, #eee8d5);
    --oscd-gray-30: var(--oscd-base1, #93a1a1);
    --oscd-gray-40: var(--oscd-base0, #839496);
    --oscd-gray-50: color-mix(in oklab, var(--oscd-base0, #839496) 50%, var(--oscd-base00, #657b83));
    --oscd-gray-60: var(--oscd-base00, #657b83);
    --oscd-gray-70: var(--oscd-base01, #586e75);
    --oscd-gray-80: var(--oscd-base02, #073642);
    --oscd-gray-90: var(--oscd-base03, #002b36); /* darkest */

    /* ==== Solarized palette Colors missed the "--oscd-*" variables ==== */
    --oscd-yellow: var(--yellow, #b58900);
    --oscd-orange: var(--orange, #cb4b16);
    --oscd-red: var(--red, #dc322f);
    --oscd-magenta: var(--magenta, #d33682);
    --oscd-violet: var(--violet, #6c71c4);
    --oscd-blue: var(--blue, #268bd2);
    --oscd-cyan: var(--cyan, #2aa198);
    --oscd-green: var(--green, #859900);

    /* ========== Extreme ========== */
    --oscd-white: #ffffff;
    --oscd-black: #000000;

    /* ========== Paper / Ink (only Light-Mode) ========== */
    --oscd-paper: #ffffff;
    --oscd-ink:   #000000;

    /* ========== Semantic Contrast-Colors (Light-Mode) ========== */
    --oscd-primary: var(--oscd-theme-primary, var(--primary));
    --oscd-on-primary:   var(--oscd-gray-20);
    --oscd-on-secondary: var(--oscd-gray-20);

    --oscd-primary-adaptive: var(--oscd-primary);
    --oscd-on-primary-adaptive: var(--oscd-on-primary);
    --oscd-secondary-adaptive: var(--oscd-secondary);
    --oscd-on-secondary-adaptive: var(--oscd-on-secondary);

    /* ========== modern Semantic-Colors ========== */
    --oscd-error:   #ff3d47;
    --oscd-on-error: var(--oscd-gray-90);
    --oscd-warning: #ffcc17;
    --oscd-on-warning: var(--oscd-gray-90);
    --oscd-success: #239c5b;
    --oscd-on-success: var(--oscd-gray-90);
  }
}

/* default dark-mode in old branding styles. Workaround: dark mode was not fully supported. */
@container style(--oscd-on-primary: initial) and style(--base03: #fdf6e3) {
  * {
    /* ========== Gray-Skala (from '--oscd-base*' Dark-Mode) ========== */
    --oscd-gray-10: var(--oscd-base03, #fdf6e3); /* lightest */
    --oscd-gray-20: var(--oscd-base02, #eee8d5);
    --oscd-gray-30: var(--oscd-base01, #93a1a1);
    --oscd-gray-40: var(--oscd-base00, #839496);
    --oscd-gray-50: color-mix(in oklab, var(--oscd-base0, #839496) 50%, var(--oscd-base00, #657b83));
    --oscd-gray-60: var(--oscd-base0, #657b83);
    --oscd-gray-70: var(--oscd-base1, #586e75);
    --oscd-gray-80: var(--oscd-base2, #073642);
    --oscd-gray-90: var(--oscd-base3, #002b36); /* darkest */

    /* ========== Paper / Ink (Dark Mode) ========== */
    --oscd-paper: #000000;
    --oscd-ink:   #ffffff;
  }
}
```

## Brand-specific fixes

If the host sets `--oscd-theme-branding` in `customer-branding.css`, you can test and ship brand CSS **before** that host is upgraded:

```css
@container style(--oscd-theme-branding: MyCompany) {
  /* ... */
}
```
