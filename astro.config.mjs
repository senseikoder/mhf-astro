import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://myhealthfair.com',
  server: {
    port: 4323
  },
  integrations: [sitemap()],
  prefetch: true,
  format: 'file',
  output: 'hybrid',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  adapter: vercel(),
  redirects: {
    '/blog': '/blog/page',
    '/en/blog': '/en/blog/page'
  }
});