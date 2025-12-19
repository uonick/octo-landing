import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    vue(),
    ViteMinifyPlugin({
      removeComments: true,
      collapseWhitespace: true,
    }),
  ],
  base: './',
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: false,
  },
})
