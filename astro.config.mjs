import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://myhealthfair.com',
  // integrations: [sitemap()],
  prefetch: false,
  format: 'file',
  output: 'hybrid',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
  redirects: {
    '/blog': '/blog/page',
    '/en/blog': '/en/blog/page',
  }
});