// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from "url";
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [vue(), tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      ]
    }
  },
  prefetch: {
    prefetchAll: true
  }
});