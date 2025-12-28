# Multi-Site Architecture - Setup Complete ✅

## Structure Created

```
voltis/
├── src/
│   ├── assets/
│   │   ├── shared/              # Common assets (icons, fonts)
│   │   └── sites/
│   │       └── france-solaire/  # Site-specific assets
│   ├── config/
│   │   ├── types.ts             # TypeScript interfaces
│   │   ├── index.ts             # getConfig() loader
│   │   └── sites/
│   │       ├── _base.ts         # createSiteConfig() factory
│   │       └── france-solaire.ts # France Solaire config
│   └── pages/
│       └── france-solaire/
│           └── index.astro      # Reference page
├── .env.example                 # Environment variables template
├── astro.config.mjs             # Dynamic site/base config
├── tailwind.config.js           # Dynamic colors from config
└── package.json                 # Build scripts per site
```

## Quick Start

### 1. Install Dependencies

```bash
cd voltis
npm install
```

### 2. Create .env File

```bash
cp .env.example .env
```

Edit `.env`:

```env
SITE_ID=france-solaire
SITE_URL=https://groupe-france-solaire.fr
BASE_PATH=
```

### 3. Development

```bash
# With site config
npm run dev:france-solaire

# Or set env manually
SITE_ID=france-solaire npm run dev
```

### 4. Build for Production

```bash
# Separate domain
npm run build:france-solaire

# Subdirectory deployment
npm run build:france-solaire:sub
```

## Creating a New Site

### Step 1: Create Configuration

```bash
cp src/config/sites/france-solaire.ts src/config/sites/nouveau-site.ts
```

Edit `nouveau-site.ts`:

```typescript
export default createSiteConfig({
  siteId: "nouveau-site",
  deployment: {
    siteUrl: "https://nouveau-site.fr",
    basePath: "/",
  },
  branding: {
    logo: "", // Import from assets
    companyName: "Nouveau Site",
    colors: {
      primary: { DEFAULT: "#...", dark: "#...", light: "#..." },
      // ... customize colors
    },
  },
  analytics: {
    gtmId: "GTM-XXXXXX",
  },
  api: {
    webhookUrl: "https://n8n.example.com/webhook/nouveau-site",
  },
  content: {
    hero: {
      /* ... */
    },
    features: [
      /* ... */
    ],
    // ... customize content
  },
});
```

**Important:** Add the import to `src/config/index.ts`:

```typescript
import nouveauSiteConfig from "./sites/nouveau-site";

const SITE_CONFIGS: Record<string, SiteConfig> = {
  "france-solaire": franceSolaireConfig,
  "nouveau-site": nouveauSiteConfig, // ← ADD THIS
};
```

And to `tailwind.config.js`:

```javascript
import nouveauSiteConfig from "./src/config/sites/nouveau-site.ts";

const SITE_CONFIGS = {
  "france-solaire": franceSolaireConfig,
  "nouveau-site": nouveauSiteConfig, // ← ADD THIS
};
```

### Step 2: Create Assets Folder

```bash
mkdir src/assets/sites/nouveau-site
# Add logo.svg, images, etc.
```

### Step 3: Create Page

```bash
mkdir src/pages/nouveau-site
cp src/pages/france-solaire/index.astro src/pages/nouveau-site/index.astro
```

Customize the page by adding/removing sections as needed.

### Step 4: Add Build Scripts

Edit `package.json`:

```json
{
  "scripts": {
    "dev:nouveau-site": "cross-env SITE_ID=nouveau-site SITE_URL=https://nouveau-site.fr astro dev",
    "build:nouveau-site": "cross-env SITE_ID=nouveau-site SITE_URL=https://nouveau-site.fr astro build"
  }
}
```

### Step 5: Build & Deploy

```bash
npm run build:nouveau-site
# Upload dist/ to public_html on Hostinger
```

## Configuration Reference

### Site Config Structure

```typescript
interface SiteConfig {
  siteId: string; // Unique identifier
  deployment: {
    siteUrl: string; // Full URL
    basePath: string; // '/' or '/sub-path'
  };
  branding: {
    logo: string | ImageMetadata;
    companyName: string;
    colors: {
      primary: ColorShade;
      secondary: ColorShade;
      accent: string;
      neutral: NeutralColors;
    };
  };
  analytics: {
    gtmId?: string;
  };
  api: {
    webhookUrl: string; // n8n webhook endpoint
    timeout?: number;
  };
  content: {
    hero: HeroContent;
    features?: Feature[];
    faq?: FaqItem[];
    testimonials?: Testimonial[];
    footer?: FooterContent;
  };
}
```

### Tailwind Colors

Colors are automatically loaded from your site config:

- `bg-primary`, `text-primary`, `border-primary`
- `bg-primary-dark`, `bg-primary-light`
- `bg-secondary`, `bg-secondary-dark`
- `bg-accent`
- `bg-neutral-50` to `bg-neutral-950`

### GTM Integration

GTM scripts are automatically injected when `analytics.gtmId` is set in your config.

## Deployment Scenarios

### Scenario 1: Separate Domains

Each site on its own domain:

```bash
# Build france-solaire → deploy to france-solaire.fr
SITE_ID=france-solaire SITE_URL=https://france-solaire.fr npm run build

# Build voltis-energie → deploy to voltis-energie.fr
SITE_ID=voltis-energie SITE_URL=https://voltis-energie.fr npm run build
```

### Scenario 2: Multi-Tenant (Same Domain)

Multiple sites on same domain with subdirectories:

```bash
# Build france-solaire → deploy to example.com/france-solaire
SITE_ID=france-solaire SITE_URL=https://example.com BASE_PATH=/france-solaire npm run build

# Build voltis-energie → deploy to example.com/voltis-energie
SITE_ID=voltis-energie SITE_URL=https://example.com BASE_PATH=/voltis-energie npm run build
```

## Component Customization

### Using Config in Components

```astro
---
import { getConfig } from '@/config';

const config = getConfig();
const { hero } = config.content;
---

<h1>{hero.title}</h1>
<p>{hero.description}</p>
```

### Props-Based Components

Most components now accept props:

```astro
<Hero
  title={config.content.hero.title}
  description={config.content.hero.description}
/>
```

## Troubleshooting

### Error: "SITE_ID environment variable is required"

Make sure you're using the correct build script:

```bash
npm run build:france-solaire
# NOT: npm run build
```

### Error: "Configuration not found for site"

Check that `src/config/sites/{siteId}.ts` exists and exports a default config.

### Colors not updating

Tailwind cache issue. Try:

```bash
rm -rf node_modules/.cache
npm run build:france-solaire
```

## Next Steps

1. ✅ Add your actual logos to `src/assets/sites/france-solaire/`
2. ✅ Update GTM ID in `france-solaire.ts` config
3. ✅ Update n8n webhook URL in `france-solaire.ts` config
4. ✅ Customize content (hero, features, FAQ, testimonials)
5. ✅ Test build: `npm run build:france-solaire`
6. ✅ Upload `dist/` to Hostinger

## Need Help?

- Config types: `src/config/types.ts`
- Example config: `src/config/sites/france-solaire.ts`
- Example page: `src/pages/france-solaire/index.astro`
