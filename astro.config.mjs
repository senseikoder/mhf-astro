import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel/serverless";
import vue from '@astrojs/vue';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://myhealthfair.com',
  server: {
    port: 4323
  },
  integrations: [sitemap(), vue(), icon()],
  prefetch: true,
  format: 'file',
  output: 'static',
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