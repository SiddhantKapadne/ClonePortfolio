import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 82,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 82,
        mozjpeg: true,
      },
      jpg: {
        quality: 82,
        mozjpeg: true,
      },
      logStats: process.env.VERBOSE_IMAGE_STATS === '1',
      ansiColors: true,
    }),
  ],
})
