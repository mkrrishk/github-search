/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
