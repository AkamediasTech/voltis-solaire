# Quick Reference - Multi-Site Architecture

## Commandes Essentielles

### Développement

```bash
npm run dev:france-solaire
```

### Build Production

```bash
# Domaine séparé
npm run build:france-solaire

# Sous-dossier
npm run build:france-solaire:sub
```

## Fichiers Clés à Modifier

### 1. Configuration Site

**`src/config/sites/france-solaire.ts`**

- GTM ID
- Webhook URL n8n
- Contenu (hero, features, FAQ, testimonials)
- Couleurs de marque
- URL de déploiement

### 2. Assets

**`src/assets/sites/france-solaire/`**

- Ajouter: `logo.svg`, images, etc.

### 3. Page

**`src/pages/france-solaire/index.astro`**

- Ajouter/retirer des sections
- Personnaliser l'ordre des composants

## Structure de Config Site

```typescript
export default createSiteConfig({
  siteId: "france-solaire",

  deployment: {
    siteUrl: "https://groupe-france-solaire.fr",
    basePath: "/",
  },

  branding: {
    logo: "", // Import depuis assets
    companyName: "France Solaire",
    colors: {
      primary: { DEFAULT: "#0066CC", dark: "#004C99", light: "#3385D6" },
      secondary: { DEFAULT: "#FF9900", dark: "#CC7A00" },
      accent: "#00CC66",
      neutral: {
        /* 50-950 */
      },
    },
  },

  analytics: {
    gtmId: "GTM-XXXXXXX", // ← À MODIFIER
  },

  api: {
    webhookUrl: "https://n8n.example.com/webhook/xxx", // ← À MODIFIER
  },

  content: {
    hero: { title: "...", description: "...", ctaText: "..." },
    features: [
      /* ... */
    ],
    faq: [
      /* ... */
    ],
    testimonials: [
      /* ... */
    ],
  },
});
```

## Nouveau Site en 5 Minutes

```bash
# 1. Config
cp src/config/sites/france-solaire.ts src/config/sites/nouveau-site.ts
# → Éditer: siteId, branding, content, api, analytics

# 2. Importer dans src/config/index.ts
# import nouveauSiteConfig from './sites/nouveau-site';
# const SITE_CONFIGS = {
#   'france-solaire': franceSolaireConfig,
#   'nouveau-site': nouveauSiteConfig, ← AJOUTER
# };

# 3. Importer dans tailwind.config.js
# import nouveauSiteConfig from './src/config/sites/nouveau-site.ts';
# const SITE_CONFIGS = {
#   'france-solaire': franceSolaireConfig,
#   'nouveau-site': nouveauSiteConfig, ← AJOUTER
# };

# 4. Assets
mkdir src/assets/sites/nouveau-site

# 5. Page
mkdir src/pages/nouveau-site
cp src/pages/france-solaire/index.astro src/pages/nouveau-site/

# 6. Scripts package.json
{
  "dev:nouveau-site": "cross-env SITE_ID=nouveau-site ...",
  "build:nouveau-site": "cross-env SITE_ID=nouveau-site ..."
}

# 7. Build
npm run build:nouveau-site
```

## Classes Tailwind Disponibles

```html
<!-- Couleurs configurées dans votre site config -->
<div class="bg-primary">
  <div class="bg-primary-dark">
    <div class="bg-primary-light">
      <div class="bg-secondary">
        <div class="bg-secondary-dark">
          <div class="bg-accent">
            <div class="bg-neutral-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Composants Props

### Hero

```astro
<Hero
  title="Mon titre"
  subtitle="Mon sous-titre"
  description="Ma description"
  ctaText="Mon CTA"
/>
```

### Sections Conditionnelles

```astro
{testimonials?.length > 0 && (
  <TestimonialsSection testimonials={testimonials} />
)}
```

## Variables d'Environnement

**`.env`**

```env
SITE_ID=france-solaire
SITE_URL=https://groupe-france-solaire.fr
BASE_PATH=
```

## Déploiement Hostinger

```bash
# 1. Build
npm run build:france-solaire

# 2. Upload dist/ vers public_html
# Via FTP/SFTP ou File Manager Hostinger
```

## Erreurs Courantes

| Erreur              | Solution                                       |
| ------------------- | ---------------------------------------------- |
| "SITE_ID required"  | Utilisez `npm run dev:france-solaire`          |
| "Config not found"  | Vérifiez `src/config/sites/{siteId}.ts` existe |
| Couleurs pas à jour | Supprimez cache: `rm -rf node_modules/.cache`  |

## Documentation Complète

- **Setup détaillé**: `MULTI_SITE_SETUP.md`
- **Résumé implémentation**: `IMPLEMENTATION_SUMMARY.md`
- **Types TypeScript**: `src/config/types.ts`

---

**Prêt à l'emploi** ✅ Toute l'infrastructure est en place !
