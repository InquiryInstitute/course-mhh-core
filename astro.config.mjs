import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://inquiry-institute.github.io',
  base: '/course-mhh-core',
  integrations: [tailwind()],
  output: 'static',
});
