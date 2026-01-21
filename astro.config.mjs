// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel';
import { defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://log.1k.ink',
  trailingSlash: 'never', 
  integrations: [mdx(), sitemap(), tailwind()],
  build: {
    inlineStylesheets: 'auto',
    format: 'file', 
  },

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  vite: {
    ssr: {
      external: ['node:fs', 'node:path'],
    },
    build: {
      minify: 'esbuild',
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});