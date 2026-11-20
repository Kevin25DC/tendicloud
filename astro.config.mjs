import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL manda; en Vercel se usa el dominio de producción del proyecto.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    }),
  ],
});
