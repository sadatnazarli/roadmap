import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  site: 'https://devroad.az',
});
