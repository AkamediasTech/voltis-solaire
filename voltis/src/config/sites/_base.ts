import type { SiteConfig } from "../types";

/**
 * Factory function to create site configurations with sensible defaults
 * Reduces duplication across site configs
 */
export function createSiteConfig(overrides: Partial<SiteConfig>): SiteConfig {
  const defaults: SiteConfig = {
    siteId: "",
    deployment: {
      siteUrl: "",
      basePath: "/",
    },
    branding: {
      logo: "",
      companyName: "",
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          dark: "#1E3A8A",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#059669",
          dark: "#047857",
        },
        accent: "#F59E0B",
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
      },
    },
    analytics: {
      gtmId: undefined,
      googleAnalyticsId: undefined,
    },
    api: {
      webhookUrl: "",
      timeout: 30000,
    },
    content: {
      hero: {
        title: "",
        description: "",
        ctaText: "En savoir plus",
      },
      features: [],
      testimonials: [],
      processSteps: [],
      stepsSection: {
        title: "",
        steps: [],
      },
      customerJourney: [],
      processV2Steps: [],
      footer: {
        copyright: `© ${new Date().getFullYear()} Tous droits réservés`,
      },
    },
  };

  // Deep merge overrides with defaults
  return deepMerge(defaults, overrides) as SiteConfig;
}

/**
 * Deep merge utility for nested objects
 */
function deepMerge(target: any, source: any): any {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
}

function isObject(item: any): boolean {
  return item && typeof item === "object" && !Array.isArray(item);
}
