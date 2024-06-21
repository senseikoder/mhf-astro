import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://myhealthfair.com',
  integrations: [sitemap()],
  prefetch: true,
  format: 'file',
  output: 'hybrid',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});