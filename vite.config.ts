import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Base path: GitHub Pages serves the production build at /IUDPR/ until a
// custom domain is connected (see README-EDITING.md), at which point
// PROD_BASE below should be changed back to '/'. Local dev always runs at
// the root regardless, so `npm run dev` isn't affected.
const PROD_BASE = '/IUDPR/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? PROD_BASE : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
