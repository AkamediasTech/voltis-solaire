import type { SiteConfig } from "./types";

// Import all site configs statically
import franceSolaireConfig from "./sites/france-solaire";
import ecoEnergieFranceConfig from "./sites/eco-energie-france";

// Map of site configs
const SITE_CONFIGS: Record<string, SiteConfig> = {
  "france-solaire": franceSolaireConfig,
  "eco-energie-france": ecoEnergieFranceConfig,
  // Add more sites here as you create them:
  // 'voltis-energie': voltisEnergieConfig,
};

/**
 * Get the active site configuration based on SITE_ID environment variable
 * @throws Error if SITE_ID is not set or config not found
 */
export function getConfig(): SiteConfig {
  const siteId = import.meta.env.SITE_ID || process.env.SITE_ID;

  if (!siteId) {
    throw new Error(
      "SITE_ID environment variable is required. Example: SITE_ID=france-solaire npm run build"
    );
  }

  const config = SITE_CONFIGS[siteId];

  if (!config) {
    throw new Error(
      `Configuration not found for site "${siteId}". ` +
        `Available sites: ${Object.keys(SITE_CONFIGS).join(", ")}. ` +
        `Make sure to import the config in src/config/index.ts`
    );
  }

  return config;
}

// Re-export types for convenience
export type {
  SiteConfig,
  BrandingConfig,
  ContentConfig,
  ApiConfig,
  AnalyticsConfig,
} from "./types";
