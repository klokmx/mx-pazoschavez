// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Use base path only in production
const base = process.env.NODE_ENV === "production" ? "/mx-pazoschavez/" : "/";

export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://pi.klok.mx/mx-pazoschavez"
      : "http://localhost:4321",
  base: base,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
