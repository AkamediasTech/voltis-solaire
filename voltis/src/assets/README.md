# Assets Structure

## Shared Assets

Place common assets used across all sites here:

- Icons
- Fonts
- Generic images

## Sites Assets

Each site has its own folder with specific assets:

- Logos
- Brand-specific images
- Site-specific graphics

### Usage Example

```typescript
// In site config
import logo from "@/assets/sites/france-solaire/logo.svg";

export const config = {
  branding: {
    logo,
    // ...
  },
};
```

```astro
---
// In component
import sharedIcon from '@/assets/shared/icons/arrow.svg';
---
```
