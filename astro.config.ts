import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import type { AstroUserConfig } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

let siteUrl = 'https://example.com';
try {
  const file = fs.readFileSync('./config.multivac.yaml', 'utf-8');
  siteUrl = YAML.parse(file)?.site?.url || siteUrl;
} catch (error) {
  console.error('读取 config.multivac.yaml 失败，使用默认 siteUrl:', error);
}

const isVercel: boolean = process.env.VERCEL === '1' || process.env.DEPLOY_PLATFORM === 'vercel';

const config: AstroUserConfig = {
  site: siteUrl,
  trailingSlash: 'never',

  integrations: [mdx(), sitemap()],

  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },

  adapter: isVercel ? vercel({ webAnalytics: { enabled: true } }) : undefined,
  output: 'static',

  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'expose-watching-yaml',
        buildStart() {
          const srcPath = path.resolve('./post/watching/index.yaml');
          const targetPath = path.resolve('./public/watching.yaml');
          
          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, targetPath);
          }
        },
        closeBundle() {
          const targetPath = path.resolve('./public/watching.yaml');
          if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath);
          }
        }
      }
    ],
    ssr: {
      external: ['node:fs', 'node:path'],
    },
    build: {
      minify: true,
      cssMinify: true,
    },
  },

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
};

export default defineConfig(config);
