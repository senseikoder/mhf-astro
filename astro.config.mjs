import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import netlify from "@astrojs/netlify";
// import vercel from "@astrojs/vercel";
import node from "@astrojs/node";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import path from "path";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://myhealthfair.com",
  server: {
    host: true,
    port: Number(process.env.PORT) || 4323,
  },
  integrations: [sitemap({
    customPages: [
      "https://myhealthfair.com/booths/alzheimer-assoc/",
      "https://myhealthfair.com/en/booths/alzheimer-assoc/",
      "https://myhealthfair.com/booths/united-health-care/",
      "https://myhealthfair.com/en/booths/united-health-care/",
    ],
  }), vue(), icon(), purgecss()],
  prefetch: true,
  format: "file",
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  adapter: node({
    mode: "standalone",
  }),
  redirects: {
    "/blog": "/blog/page",
    "/en/blog": "/en/blog/page",
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});