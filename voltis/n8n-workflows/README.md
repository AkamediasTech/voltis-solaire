# n8n Workflows pour le Tracking

Ce dossier contient les workflows n8n prêts à importer pour le système de tracking personnalisé.

## 📋 Fichiers

- **1-pageviews.json** - Workflow pour tracker les pages vues
- **2-leads.json** - Workflow pour tracker les leads (avec notification email optionnelle)
- **3-events.json** - Workflow pour tracker les événements personnalisés

## 🚀 Import dans n8n

### Étape 1 : Créer un Google Sheet

Crée un Google Sheet avec 3 onglets :

#### Onglet "PageViews"

Colonnes : Site ID | Session ID | Environment | Timestamp | URL | Path | Page Title | Referrer | Viewport | Screen | Language | UTM Source | UTM Medium | UTM Campaign

#### Onglet "Leads"

Colonnes : Site ID | Session ID | Environment | Timestamp | Lead Type | First Name | Last Name | Email | Phone | Postal Code | City | User Type | Housing Type | Heating Type | Surface | Electric Bill | URL | Referrer | UTM Source | UTM Medium | UTM Campaign

#### Onglet "Events"

Colonnes : Site ID | Session ID | Environment | Timestamp | Event Name | URL | Path | Event Data

### Étape 2 : Importer les workflows

Pour chaque fichier JSON :

1. **Ouvre n8n**
2. **Clic sur "+" → "Import from File"** (ou CTRL+O)
3. **Sélectionne le fichier JSON** (ou copie-colle son contenu)
4. **Le workflow s'affiche** avec tous les nodes

### Étape 3 : Configurer Google Sheets

Pour chaque workflow :

1. **Clic sur le node "Google Sheets"**
2. **Connecte ton compte Google** (OAuth2)
3. **Sélectionne ton spreadsheet** dans la liste
4. **Sélectionne l'onglet** correspondant (PageViews, Leads ou Events)
5. **Mode "Auto-map input data"** est déjà configuré

### Étape 4 : Activer les workflows

1. **Clic sur le toggle** en haut à droite pour activer le workflow
2. **Mode "Production"** est requis pour que le webhook soit permanent
3. **Copie l'URL du webhook** :
   - Clic sur le node "Webhook"
   - Copie l'URL "Production URL"

### Étape 5 : Configurer le site

Colle les URLs dans `voltis/src/config/sites/france-solaire.ts` :

```typescript
tracking: {
  enabled: true,
  endpoints: {
    pageView: "https://TON-URL.n8n.cloud/webhook/pv",      // ← Colle l'URL du workflow 1
    lead: "https://TON-URL.n8n.cloud/webhook/lead",        // ← Colle l'URL du workflow 2
    event: "https://TON-URL.n8n.cloud/webhook/event",      // ← Colle l'URL du workflow 3
  },
  debug: false,  // Met true pour voir les logs console
}
```

## 🔧 Configuration optionnelle

### Notification email (Workflow 2 - Leads)

Le workflow leads inclut un node d'email désactivé par défaut.

**Pour l'activer :**

1. **Configure les credentials SMTP** dans n8n
2. **Édite le node "Send Email (Optional)"** :
   - Change `fromEmail` et `toEmail`
   - Sélectionne tes credentials SMTP
3. **Active le node** (clic droit → Enable)

## ✅ Tester

1. **Met `debug: true`** dans la config du site
2. **Lance le site** : `npm run dev:france-solaire`
3. **Ouvre la console navigateur**
4. **Vérifie les logs** : `[Tracking] ✅ sendBeacon`
5. **Vérifie Google Sheets** : Les données doivent apparaître

## 📊 Workflow 1 : Page Views

```
Webhook (POST /pv)
  ↓
Filter Bots (IF: UA not contains bot/crawler/spider)
  ↓ (true)
Format Data (Extract 13 fields)
  ↓
Google Sheets (Append to PageViews)
  ↓
Respond {success: true}
```

**Filtre bots** : Skip si User-Agent contient "bot", "crawler" ou "spider"

## 📧 Workflow 2 : Leads

```
Webhook (POST /lead)
  ↓
Format Lead Data (Extract 20 fields)
  ↓
├─→ Google Sheets (Append to Leads)
│     ↓
│   Respond {success: true}
│
└─→ Prepare Email (Format notification)
      ↓
    Send Email (Optional - disabled by default)
```

**Email notification** : Contient toutes les infos du lead formatées

## 🎯 Workflow 3 : Custom Events

```
Webhook (POST /event)
  ↓
Format Event Data (Extract 7 fields + full JSON)
  ↓
Google Sheets (Append to Events)
  ↓
Respond {success: true}
```

**Event Data** : Stocke le payload complet en JSON pour analyse ultérieure

## 🔍 Debugging

### Workflow ne reçoit pas de données

1. **Vérifie que le workflow est activé** (toggle en haut à droite)
2. **Vérifie le mode "Production"** (requis pour webhooks permanents)
3. **Copie la bonne URL** (Production URL, pas Test URL)
4. **Vérifie dans n8n** : Executions → Recent executions

### Google Sheets ne s'écrit pas

1. **Vérifie les permissions Google** (OAuth2 doit avoir accès au sheet)
2. **Vérifie que l'onglet existe** avec le bon nom (PageViews, Leads, Events)
3. **Vérifie le mapping** : Auto-map doit être activé
4. **Check les executions n8n** pour voir l'erreur exacte

### Pas de tracking sur le site

1. **Met `debug: true`** dans la config
2. **Vérifie la console** : Les logs `[Tracking]` doivent apparaître
3. **Vérifie que tracking est enabled** dans la config
4. **En dev**, tracking est skip sauf si `debug: true`

## 📚 Ressources

- [Documentation n8n](https://docs.n8n.io/)
- [Node Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [Node Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
- [Guide tracking complet](../src/utils/tracking.md)
