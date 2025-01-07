// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from "url";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [vue()],
  vite: {
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      ]
    }
  }
});
