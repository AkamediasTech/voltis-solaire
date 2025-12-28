// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://groupe-france-solaire.fr",
  base: process.env.BASE_PATH || "/",
  integrations: [react()],
  output: "static",
});
