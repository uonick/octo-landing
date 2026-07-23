import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  site: 'https://octows.ru',
  outDir: './dist',
  build: {
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDirectory, 'src'),
      },
    },
  },
  image: {
    responsiveStyles: true,
  },
})
