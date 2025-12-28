/**
 * Tailwind CSS Configuration with dynamic colors from site config
 * Colors are loaded based on SITE_ID environment variable
 */

// Import site configs
import franceSolaireConfig from "./src/config/sites/france-solaire.ts";
import ecoEnergieFranceConfig from "./src/config/sites/eco-energie-france.ts";

// Map of available configs
const SITE_CONFIGS = {
  "france-solaire": franceSolaireConfig,
  "eco-energie-france": ecoEnergieFranceConfig,
  // Add more as you create them
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: getSiteColors(),
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/**
 * Load colors from the active site configuration
 */
function getSiteColors() {
  const siteId = process.env.SITE_ID;

  // If no SITE_ID, return default colors (for development without site context)
  if (!siteId) {
    console.warn("⚠️  SITE_ID not set, using default colors");
    return getDefaultColors();
  }

  const config = SITE_CONFIGS[siteId];

  if (!config || !config.branding || !config.branding.colors) {
    console.error(`❌ Invalid configuration for site "${siteId}"`);
    console.warn("⚠️  Falling back to default colors");
    return getDefaultColors();
  }

  const { primary, secondary, accent, neutral } = config.branding.colors;

  return {
    primary: {
      DEFAULT: primary.DEFAULT,
      dark: primary.dark || primary.DEFAULT,
      light: primary.light || primary.DEFAULT,
    },
    secondary: {
      DEFAULT: secondary.DEFAULT,
      dark: secondary.dark || secondary.DEFAULT,
      light: secondary.light || secondary.DEFAULT,
    },
    accent: accent,
    neutral: neutral,
  };
}

function getDefaultColors() {
  return {
    primary: {
      DEFAULT: "#0066CC",
      dark: "#004C99",
      light: "#3385D6",
    },
    secondary: {
      DEFAULT: "#FF9900",
      dark: "#CC7A00",
      light: "#FFB333",
    },
    accent: "#00CC66",
  };
}
