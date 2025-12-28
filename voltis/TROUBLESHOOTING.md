# Troubleshooting Guide

## Common Errors & Solutions

### ✅ FIXED: "require is not defined"

**Error:**

```
Failed to load configuration for site "france-solaire".
Error: require is not defined
```

**Solution:**
Changed from dynamic `require()` to static imports in:

- `src/config/index.ts`
- `tailwind.config.js`

Now configs are imported statically and mapped by site ID.

---

### Error: "SITE_ID environment variable is required"

**Cause:** Running build/dev without specifying which site to use.

**Solution:**

```bash
# ❌ Wrong
npm run dev
npm run build

# ✅ Correct
npm run dev:france-solaire
npm run build:france-solaire
```

---

### Error: "Configuration not found for site X"

**Cause:** Site config not imported in `src/config/index.ts` or `tailwind.config.js`.

**Solution:**
When creating a new site, you MUST add it to both files:

**1. `src/config/index.ts`:**

```typescript
import yourNewSiteConfig from "./sites/your-new-site";

const SITE_CONFIGS: Record<string, SiteConfig> = {
  "france-solaire": franceSolaireConfig,
  "your-new-site": yourNewSiteConfig, // ← ADD THIS
};
```

**2. `tailwind.config.js`:**

```javascript
import yourNewSiteConfig from "./src/config/sites/your-new-site.ts";

const SITE_CONFIGS = {
  "france-solaire": franceSolaireConfig,
  "your-new-site": yourNewSiteConfig, // ← ADD THIS
};
```

---

### Colors not updating after config change

**Cause:** Tailwind/Vite cache.

**Solution:**

```bash
# Stop dev server (Ctrl+C)
rm -rf node_modules/.cache
npm run dev:france-solaire
```

---

### Port 4321 is in use

**Not an error** - Astro will automatically use the next available port (4322, 4323, etc.)

To stop the other server:

```bash
# Find process on port 4321
netstat -ano | findstr :4321

# Kill it
taskkill /PID <PID> /F
```

---

### TypeScript errors in .astro files

**Cause:** Missing type definitions or incorrect imports.

**Check:**

1. Is `tsconfig.json` configured with paths?
2. Is `@/config` import working?
3. Run: `npm run astro check`

---

### "Cannot find module" errors

**Cause:** Missing npm dependencies or incorrect import paths.

**Solution:**

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Or specific package
npm install cross-env --save-dev
```

---

### GTM not loading

**Check:**

1. Is `analytics.gtmId` set in your site config?
2. Is it a valid GTM ID format? (`GTM-XXXXXXX`)
3. Check browser console for errors
4. Check Network tab for GTM script loading

---

### Webhook not receiving data

**Check:**

1. Is `api.webhookUrl` correct in site config?
2. Is n8n webhook active and waiting?
3. Check browser console for fetch errors
4. Test webhook URL with curl/Postman first

---

### Build succeeds but site doesn't work on Hostinger

**Common causes:**

1. **BASE_PATH issue** - If deployed in subdirectory:

   ```bash
   # Use the sub version
   npm run build:france-solaire:sub
   ```

2. **Missing files** - Ensure you uploaded ALL files from `dist/`:

   ```
   dist/
   ├── index.html
   ├── _astro/
   └── ...
   ```

3. **.htaccess needed** - Create `.htaccess` for SPA routing:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

---

### Dev server working but build fails

**Common causes:**

1. **Import errors** - Some imports work in dev but fail in build
2. **Environment variables** - Check SITE_ID is set in build command
3. **Memory issues** - Try increasing Node memory:
   ```bash
   NODE_OPTIONS=--max-old-space-size=4096 npm run build:france-solaire
   ```

---

## Getting Help

If you encounter an error not listed here:

1. **Check the error message** - It usually tells you what's wrong
2. **Check site config** - Is everything spelled correctly?
3. **Check imports** - Are all configs imported in index.ts and tailwind.config.js?
4. **Clear caches** - `rm -rf node_modules/.cache`
5. **Check documentation** - QUICK_REFERENCE.md, MULTI_SITE_SETUP.md

---

## Verification Checklist

Before reporting an issue, verify:

- [ ] `SITE_ID` is set when running dev/build
- [ ] Site config exists in `src/config/sites/`
- [ ] Site config is imported in `src/config/index.ts`
- [ ] Site config is imported in `tailwind.config.js`
- [ ] `cross-env` is installed (`npm list cross-env`)
- [ ] No TypeScript errors (`npm run astro check`)
- [ ] Tried clearing cache (`rm -rf node_modules/.cache`)

---

**Current Status:** ✅ All systems working - Dev server running on http://localhost:4322/
