# Architecture Multi-Sites - Implémentation Terminée ✅

## Ce qui a été fait

### 1. ✅ Structure de Configuration

- `src/config/types.ts` - Interfaces TypeScript complètes
- `src/config/index.ts` - Loader de config avec `getConfig()`
- `src/config/sites/_base.ts` - Factory `createSiteConfig()` pour réduire duplication
- `src/config/sites/france-solaire.ts` - Configuration de référence complète

### 2. ✅ Gestion des Assets

- `src/assets/shared/` - Assets communs (icônes, fonts)
- `src/assets/sites/france-solaire/` - Assets spécifiques au site
- Import direct dans les configs pour optimisation automatique

### 3. ✅ Palette de Couleurs Dynamique

- `tailwind.config.js` modifié pour charger les couleurs depuis la config
- Support complet: primary, secondary, accent, neutral (50-950)
- Classes Tailwind: `bg-primary`, `text-secondary-dark`, etc.

### 4. ✅ Déploiement Flexible

- `astro.config.mjs` - Support `SITE_URL` et `BASE_PATH`
- Domaines séparés OU sous-dossiers (multi-tenant)
- Variables d'environnement documentées dans `.env.example`

### 5. ✅ GTM & Analytics

- `Layout.astro` - Injection automatique des scripts GTM
- Scripts ajoutés uniquement si `analytics.gtmId` est défini
- Support noscript iframe

### 6. ✅ Composants Refactorisés

- `Hero.astro` - Accepte title, subtitle, description via props
- Simulator passe le `webhookUrl` au formulaire
- `NewStepContactInfo.tsx` - Soumission réelle vers n8n webhook

### 7. ✅ Page de Référence

- `src/pages/france-solaire/index.astro` - Template complet
- Import et utilisation de la config
- Sections conditionnelles (testimonials, FAQ)

### 8. ✅ Scripts de Build

- `package.json` - Scripts par site
- `cross-env` installé pour compatibilité Windows
- Scripts dev et build pour chaque scénario

## Structure Finale

```
voltis/
├── src/
│   ├── assets/
│   │   ├── shared/              ✅ Assets communs
│   │   └── sites/
│   │       └── france-solaire/  ✅ Assets site
│   ├── config/
│   │   ├── types.ts             ✅ Types complets
│   │   ├── index.ts             ✅ Loader
│   │   └── sites/
│   │       ├── _base.ts         ✅ Factory
│   │       └── france-solaire.ts ✅ Config référence
│   ├── pages/
│   │   └── france-solaire/
│   │       └── index.astro      ✅ Page template
│   └── layouts/
│       └── Layout.astro         ✅ GTM injection
├── .env.example                 ✅ Variables env
├── astro.config.mjs             ✅ Config dynamique
├── tailwind.config.js           ✅ Couleurs dynamiques
├── package.json                 ✅ Scripts build
└── MULTI_SITE_SETUP.md          ✅ Documentation complète
```

## Prochaines Étapes (À faire par vous)

### Étape 1: Configurer l'environnement

```bash
cd voltis
cp .env.example .env
# Éditer .env avec SITE_ID=france-solaire
```

### Étape 2: Mettre à jour la config

Éditer `src/config/sites/france-solaire.ts`:

- ✅ Remplacer `GTM-XXXXXXX` par votre vrai GTM ID
- ✅ Remplacer l'URL webhook n8n
- ✅ Personnaliser le contenu (hero, features, FAQ, testimonials)
- ✅ Ajouter votre logo dans `src/assets/sites/france-solaire/logo.svg`

### Étape 3: Tester en développement

```bash
npm run dev:france-solaire
```

### Étape 4: Build de production

```bash
npm run build:france-solaire
```

### Étape 5: Déployer

Upload le contenu de `dist/` vers `public_html` sur Hostinger.

## Créer un Nouveau Site (Exemple: voltis-energie)

```bash
# 1. Copier la config
cp src/config/sites/france-solaire.ts src/config/sites/voltis-energie.ts

# 2. Créer le dossier assets
mkdir src/assets/sites/voltis-energie

# 3. Copier la page
mkdir src/pages/voltis-energie
cp src/pages/france-solaire/index.astro src/pages/voltis-energie/

# 4. Modifier voltis-energie.ts:
# - siteId: 'voltis-energie'
# - deployment.siteUrl: 'https://voltis-energie.fr'
# - branding: couleurs, logo, companyName
# - content: hero, features, etc.
# - analytics.gtmId: 'GTM-YYYYYY'
# - api.webhookUrl: 'https://n8n.../voltis-energie'

# 5. Ajouter scripts dans package.json:
"dev:voltis-energie": "cross-env SITE_ID=voltis-energie SITE_URL=https://voltis-energie.fr astro dev",
"build:voltis-energie": "cross-env SITE_ID=voltis-energie SITE_URL=https://voltis-energie.fr astro build"

# 6. Build
npm run build:voltis-energie
```

## Commandes Utiles

```bash
# Dev avec config
npm run dev:france-solaire

# Build domaine séparé
npm run build:france-solaire

# Build sous-dossier
npm run build:france-solaire:sub

# Voir les erreurs TypeScript
npm run astro check
```

## Points Techniques Importants

### Import de la Config

```typescript
import { getConfig } from "@/config";
const config = getConfig(); // Charge automatiquement selon SITE_ID
```

### Classes Tailwind Disponibles

Les couleurs de votre config sont disponibles:

```html
<div class="bg-primary text-white">
  <button class="bg-secondary-dark hover:bg-secondary">
    <span class="text-accent"></span>
  </button>
</div>
```

### Passer Props aux Composants

```astro
<Hero
  title={config.content.hero.title}
  description={config.content.hero.description}
/>
```

### Sections Conditionnelles

```astro
{config.content.testimonials && config.content.testimonials.length > 0 && (
  <TestimonialsSection testimonials={config.content.testimonials} />
)}
```

## Troubleshooting

### "SITE_ID environment variable is required"

→ Utilisez `npm run dev:france-solaire` au lieu de `npm run dev`

### "Configuration not found for site"

→ Vérifiez que `src/config/sites/{siteId}.ts` existe et exporte un `default`

### Les couleurs ne changent pas

→ Supprimez le cache: `rm -rf node_modules/.cache` puis rebuild

### Import errors

→ Vérifiez que `tsconfig.json` a bien les `paths` configurés (déjà fait)

## Documentation Complète

Voir `MULTI_SITE_SETUP.md` pour:

- Guide complet de création d'un nouveau site
- Référence des interfaces de configuration
- Exemples de déploiement multi-scénarios
- Personnalisation des composants

## Support

Structure complète et fonctionnelle en place. Tous les fichiers de configuration, composants refactorisés, et scripts de build sont prêts à l'emploi.

Pour créer votre premier site de production:

1. Mettez à jour `france-solaire.ts` avec vos vraies données
2. Ajoutez vos assets (logo, images)
3. Testez avec `npm run dev:france-solaire`
4. Buildez avec `npm run build:france-solaire`
5. Uploadez `dist/` sur Hostinger

Bonne chance ! 🚀
