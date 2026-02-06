import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: '/MutableMusicalInterface/', // Ex: /tese-nadia/
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://nadiacarvalho.github.io/MutableMusicalInterface/',
      dynamicRoutes: ['/paper/aimc-2023', '/paper/smc-2024-sampling', '/paper/mcm-2024-fourier', '/paper/smc-2024-sax', 'paper/amicad-2025-motiv', 'paper/ijpadm-2025-timbre']
    })
  ],
})