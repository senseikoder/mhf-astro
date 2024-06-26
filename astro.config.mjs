import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://myhealthfair.com',
  integrations: [sitemap()],
  prefetch: true,
  format: 'file',
  output: 'hybrid',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});