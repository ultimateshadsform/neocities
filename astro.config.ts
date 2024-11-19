// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { defineViteConfig } from './astro.define';

// https://astro.build/config
export default defineConfig({
  site: 'https://hedgehogform.neocities.org',
  integrations: [tailwind()],
  server: {
    port: 3000,
  },
  vite: {
    define: defineViteConfig,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
});
