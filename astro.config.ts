import { defineConfig } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import { remarkReadingTime } from './src/utils/readingTime.mjs'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
  },
  integrations: [sitemap(), expressiveCode(), mdx()],
  site: 'https://www.ivanfarias.tech',
  prefetch: { prefetchAll: true },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})