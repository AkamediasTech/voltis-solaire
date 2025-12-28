# Public Shared Assets

This folder contains assets shared across ALL sites.

## Contents:

- robots.txt
- favicon.svg
- Common images (RGE logos, EDF logo, etc.)
- Any asset used by multiple sites

## How it works:

The `scripts/copy-public.js` script merges this folder with site-specific assets into `/public/` before each build/dev.
