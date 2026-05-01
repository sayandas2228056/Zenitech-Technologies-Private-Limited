import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],

  /* ── Build Optimization for SEO & Performance ─────────── */
  build: {
    // Chunk splitting strategy for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks — cached separately from app code
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion/') ||
              id.includes('node_modules/gsap/')) {
            return 'animation-vendor';
          }
          if (id.includes('node_modules/lucide-react/') ||
              id.includes('node_modules/react-icons/') ||
              id.includes('node_modules/swiper/')) {
            return 'ui-vendor';
          }
        },
      },
    },

    // Target modern browsers for smaller bundles
    target: 'es2020',

    // CSS code splitting
    cssCodeSplit: true,

    // Source maps off in production for smaller deploy
    sourcemap: false,

    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,

    // Asset inlining threshold (inline small assets as base64)
    assetsInlineLimit: 4096,
  },

  /* ── Dev Server ────────────────────────────────────────── */
  server: {
    open: true,
  },
})
