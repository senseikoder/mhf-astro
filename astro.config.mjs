import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://myhealthfair.com',
	integrations: [sitemap()],
	prefetch: true,
	format: 'file',
	output: 'hybrid'
});
