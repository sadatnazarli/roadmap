import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypeSlug from 'rehype-slug'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ rehypePlugins: [rehypeSlug] }) },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
})
