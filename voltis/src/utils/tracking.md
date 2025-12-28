# Système de Tracking Personnalisé

Ce document explique le fonctionnement du système de tracking personnalisé mis en place pour contourner les adblockers et envoyer des événements à des webhooks n8n.

## 📋 Vue d'ensemble

Le système de tracking est conçu pour :

- **Contourner les adblockers** en utilisant des endpoints n8n personnalisés (pas de domaines tracking connus)
- **Centraliser la configuration** pour tous les sites (france-solaire, eco-energie-france, etc.)
- **Enrichir automatiquement** les données avec des métadonnées (session, viewport, UTMs, etc.)
- **Garantir l'envoi** avec sendBeacon + fallback fetch avec keepalive
- **Éviter les doublons** via sessionStorage pour les page views

## 🏗️ Architecture

### Fichiers impliqués

```
voltis/src/
├── config/
│   ├── types.ts                    # Types TrackingConfig, TrackingEndpoints
│   └── sites/
│       ├── france-solaire.ts      # Config tracking France Solaire
│       └── eco-energie-france.ts  # Config tracking Eco Energie France
├── utils/
│   └── tracking.ts                 # Module tracking centralisé
├── layouts/
│   └── Layout.astro                # Script inline pageView + window.__tracking API
└── components/
    └── simulator/
        └── steps/
            └── NewStepContactInfo.tsx  # Tracking lead après soumission
```

## 🔧 Configuration

### 1. Types TypeScript (`config/types.ts`)

```typescript
export interface TrackingEndpoints {
  pageView: string; // Webhook n8n pour page views
  lead: string; // Webhook n8n pour leads
  event: string; // Webhook n8n pour événements custom
}

export interface TrackingConfig {
  enabled: boolean;
  endpoints: TrackingEndpoints;
  debug?: boolean; // Active les logs console
}

export interface AnalyticsConfig {
  gtmId?: string;
  googleAnalyticsId?: string;
  tracking?: TrackingConfig; // ← Nouveau
}
```

### 2. Configuration par site

**Exemple : `config/sites/france-solaire.ts`**

```typescript
analytics: {
  gtmId: "GTM-XXXXXXX",
  tracking: {
    enabled: true,  // Active/désactive le tracking
    endpoints: {
      pageView: "https://france-solaire.n8n.cloud/webhook/pv",
      lead: "https://france-solaire.n8n.cloud/webhook/lead",
      event: "https://france-solaire.n8n.cloud/webhook/event",
    },
    debug: false,  // true = logs console en dev
  },
}
```

**Pour désactiver le tracking sur un site** :

```typescript
tracking: {
  enabled: false,
  // ...endpoints non utilisés
}
```

## 📡 Module Tracking (`utils/tracking.ts`)

### Fonctions publiques

#### `initTracking(siteConfig: SiteConfig)`

Initialise le système avec la configuration du site. **Non utilisé actuellement** car le script dans Layout.astro est inline et auto-suffisant.

```typescript
import { initTracking } from "@utils/tracking";
import { getConfig } from "@config";

initTracking(getConfig());
```

#### `trackPageView()`

Track une page view. Anti-doublon automatique via sessionStorage basé sur `pathname`.

```typescript
import { trackPageView } from "@utils/tracking";

trackPageView(); // Appelé automatiquement au chargement dans Layout.astro
```

#### `trackLead(formData: Record<string, any>)`

Track une soumission de lead (formulaire). Ajoute automatiquement `lead_type: 'simulator'`.

```typescript
import { trackLead } from "@utils/tracking";

trackLead({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  // ... toutes les données du formulaire
});
```

#### `trackEvent(eventName: string, data?: Record<string, any>)`

Track un événement personnalisé.

```typescript
import { trackEvent } from "@utils/tracking";

// Exemple: track navigation dans le simulateur
trackEvent("simulator_step", {
  step: 3,
  step_name: "heating",
});

// Exemple: track clic CTA
trackEvent("cta_click", {
  cta_text: "Obtenir mon devis",
  location: "hero",
});
```

### Enrichissement automatique

Chaque événement est automatiquement enrichi avec :

```typescript
{
  // Données du payload original
  ...payload,

  // Métadonnées automatiques
  site_id: "france-solaire",           // ID du site
  session_id: "uuid-v4",               // ID de session unique
  ts: 1735420800000,                   // Timestamp (ms)
  url: "https://exemple.fr/page?q=1",  // URL complète
  path: "/page",                       // Pathname seul
  ref: "https://google.com",           // Referrer
  ua: "Mozilla/5.0...",                // User-Agent
  lang: "fr-FR",                       // Langue navigateur
  viewport: "1920x1080",               // Taille viewport
  screen: "2560x1440",                 // Résolution écran

  // UTM params (si présents dans l'URL)
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "solar_2025",
  // ...
}
```

### Logique d'envoi

```
1. Vérification : tracking enabled ?
   ├─ Non → Skip
   └─ Oui → Continue

2. Vérification : Dev mode sans debug ?
   ├─ Oui → Skip (évite spam en dev)
   └─ Non → Continue

3. Enrichir le payload

4. Tentative sendBeacon (optimal pour page unload)
   ├─ Succès → ✅ Fin
   └─ Échec → Fallback fetch

5. Fetch avec keepalive
   ├─ Succès → ✅ Fin
   └─ Échec → ❌ Log erreur (si debug)
```

## 🎯 Intégration

### 1. Page Views (automatique)

Le script dans `Layout.astro` track automatiquement chaque page au chargement :

```astro
<!-- Layout.astro -->
{config.analytics.tracking?.enabled && (
  <script is:inline define:vars={{ trackingConfig, siteId }}>
    // Script inline qui :
    // 1. Initialise la session
    // 2. Track pageView au load
    // 3. Expose window.__tracking API
  </script>
)}
```

**Anti-doublon** : La clé `pv:${pathname}` dans sessionStorage évite les envois multiples sur refresh/navigation arrière.

### 2. Leads (formulaire simulateur)

Dans `NewStepContactInfo.tsx`, après soumission réussie :

```tsx
// Track lead submission
if (typeof window !== "undefined" && (window as any).__tracking) {
  (window as any).__tracking.lead(data);
}
```

### 3. Événements custom (optionnel)

Depuis n'importe quel composant React :

```tsx
// Déclarer le type (optionnel)
declare global {
  interface Window {
    __tracking?: {
      lead: (data: Record<string, any>) => void;
      event: (name: string, data?: Record<string, any>) => void;
    };
  }
}

// Utiliser
const handleClick = () => {
  window.__tracking?.event("button_click", {
    button_id: "cta_hero",
  });
};
```

## 🐛 Debug et Tests

### Activer le mode debug

Dans la config du site :

```typescript
tracking: {
  enabled: true,
  debug: true,  // ← Active les logs console
  endpoints: { ... }
}
```

**En mode debug**, vous verrez dans la console :

```
[Tracking] Tracking initialized { siteId: 'france-solaire', sessionId: '...' }
[Tracking] ✅ sendBeacon { event: 'page_view', ... }
[Tracking] ✅ fetch { event: 'lead', ... }
```

### Tester en local

1. **Désactiver le skip dev** : Met `debug: true`
2. **Lance le site** : `npm run dev:france-solaire`
3. **Ouvre la console** : Vérifie les logs `[Tracking]`
4. **Vérifie n8n** : Les webhooks reçoivent les données

### Tester les webhooks

**Option 1 : n8n Cloud**

- Configure des webhooks de test sur n8n.cloud
- Vérifie les exécutions dans le workflow

**Option 2 : RequestBin / Webhook.site**

- Remplace temporairement les endpoints par des URLs de test
- Vérifie que les payloads arrivent correctement

**Option 3 : Console seulement**

- Met `debug: true`
- Les logs console montrent les payloads sans réel envoi en dev

## 🚀 Workflow n8n recommandé

### Webhook pageView

```
[Webhook Trigger]
  ↓
[Filter: remove bots via UA]
  ↓
[PostgreSQL: insert page_view]
  ↓
[Success response]
```

### Webhook lead

```
[Webhook Trigger]
  ↓
[Set: extract fields]
  ↓
├─ [PostgreSQL: insert lead]
├─ [SendGrid: email notification]
└─ [HTTP: send to CRM API]
  ↓
[Success response]
```

### Webhook event

```
[Webhook Trigger]
  ↓
[Switch: by event type]
  ├─ simulator_step → [Track funnel]
  ├─ cta_click → [Track conversion]
  └─ default → [Log to DB]
  ↓
[Success response]
```

## 📊 Données collectées

### Page View

```json
{
  "event": "page_view",
  "site_id": "france-solaire",
  "session_id": "uuid",
  "ts": 1735420800000,
  "url": "https://france-solaire.fr/",
  "path": "/",
  "page_title": "France Solaire | Installation Solaire",
  "ref": "https://google.com",
  "ua": "Mozilla/5.0...",
  "lang": "fr-FR",
  "viewport": "1920x1080",
  "screen": "2560x1440",
  "utm_source": "google",
  "utm_campaign": "solar_2025"
}
```

### Lead

```json
{
  "event": "lead",
  "lead_type": "simulator",
  "site_id": "france-solaire",
  "session_id": "uuid",
  "ts": 1735420850000,

  // Données formulaire
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "0612345678",
  "userType": "individual",
  "housingType": "house",
  "heatingType": "electric",
  "surface": "100",
  "electricBill": "150",
  "postalCode": "75001",
  "city": "Paris",

  // Métadonnées auto
  "url": "https://france-solaire.fr/#simulator",
  "ref": "https://google.com",
  "utm_source": "google"
}
```

### Event custom

```json
{
  "event": "simulator_step",
  "site_id": "france-solaire",
  "session_id": "uuid",
  "ts": 1735420825000,

  // Données custom
  "step": 3,
  "step_name": "heating",

  // Métadonnées auto
  "url": "https://france-solaire.fr/#simulator",
  "viewport": "1920x1080"
}
```

## 🔒 Sécurité et Conformité

### RGPD

- ✅ **Pas de cookies** : Utilise sessionStorage (supprimé à fermeture)
- ✅ **Données minimales** : User-Agent, viewport (pas d'IP côté client)
- ✅ **Consentement** : Intégrer avec CookieConsent.astro si nécessaire
- ⚠️ **Données personnelles** : Les leads contiennent nom/email → Traiter conformément RGPD

### Recommandations

1. **Ajouter mention dans politique de confidentialité**
2. **Anonymiser les IPs** côté n8n si stocké en base
3. **Rétention limitée** : Supprimer les données après X mois
4. **Webhook sécurisé** : Utiliser HTTPS, valider les données n8n

## 🎛️ Gestion Multi-Sites

### Ajouter un nouveau site

1. **Créer le fichier config** : `config/sites/nouveau-site.ts`
2. **Configurer tracking** :

```typescript
analytics: {
  tracking: {
    enabled: true,
    endpoints: {
      pageView: "https://nouveau-site.n8n.cloud/webhook/pv",
      lead: "https://nouveau-site.n8n.cloud/webhook/lead",
      event: "https://nouveau-site.n8n.cloud/webhook/event",
    },
    debug: false,
  },
}
```

3. **Build** : `SITE_ID=nouveau-site npm run build`
4. **C'est tout !** Le tracking fonctionne automatiquement

### Endpoints différents par site

Chaque site peut avoir ses propres webhooks n8n :

- `france-solaire` → `https://fs.n8n.cloud/webhook/*`
- `eco-energie-france` → `https://eef.n8n.cloud/webhook/*`
- Permet des workflows différents par marque

## 🔍 Troubleshooting

### Le tracking ne fonctionne pas

**1. Vérifier la config**

```typescript
// config/sites/votresite.ts
tracking: {
  enabled: true,  // ← Bien true ?
  endpoints: {
    pageView: "...",  // ← URL valide ?
  }
}
```

**2. Vérifier les logs console**

- Met `debug: true` dans la config
- Refresh la page
- Cherche `[Tracking]` dans la console

**3. Vérifier le mode dev**

- En dev sans `debug: true`, le tracking est skip
- Teste en prod ou active debug

**4. Vérifier les webhooks n8n**

- Les workflows sont activés ?
- Les webhooks sont en "Production" ?
- Les URLs sont correctes ?

### Doublons de page views

**Causes possibles** :

- Multi-instances du script (vérifier Layout.astro)
- sessionStorage non fonctionnel
- Navigation client-side (SPA) non gérée

**Solution** : Le système actuel utilise `pathname` comme clé, donc normalement pas de doublons sur même page.

### Événements perdus

**sendBeacon limitations** :

- Taille max : 64KB
- Peut être bloqué par browser policy

**Solution** : Le fallback `fetch` avec `keepalive` prend le relais automatiquement.

## 📈 Extensions possibles

### 1. Tracking avancé du simulateur

```typescript
// Tracker chaque étape
import { trackEvent } from "@utils/tracking";

const handleStepComplete = (stepNumber: number, stepName: string) => {
  trackEvent("simulator_step_complete", {
    step: stepNumber,
    step_name: stepName,
    data: { ...relevantStepData },
  });
};
```

### 2. Tracking du temps passé

```typescript
const startTime = Date.now();
window.addEventListener("beforeunload", () => {
  trackEvent("session_duration", {
    duration_seconds: Math.floor((Date.now() - startTime) / 1000),
  });
});
```

### 3. Tracking des erreurs

```typescript
window.addEventListener("error", (event) => {
  trackEvent("error", {
    message: event.message,
    filename: event.filename,
    line: event.lineno,
  });
});
```

### 4. Tracking scroll depth

```typescript
let maxScroll = 0;
window.addEventListener("scroll", () => {
  const scrollPercent = Math.floor(
    ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
  );
  maxScroll = Math.max(maxScroll, scrollPercent);
});

window.addEventListener("beforeunload", () => {
  trackEvent("scroll_depth", { max_percent: maxScroll });
});
```

## 📚 Ressources

- [MDN: Navigator.sendBeacon()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)
- [Fetch API: keepalive](https://developer.mozilla.org/en-US/docs/Web/API/fetch#keepalive)
- [n8n Webhook Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [RGPD - CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees)
