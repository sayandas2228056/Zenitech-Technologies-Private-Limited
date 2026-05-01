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
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,   // Remove console.log in production
        drop_debugger: true,
        passes: 2,            // Extra compression pass
      },
    },

    // Chunk splitting strategy for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks — cached separately from app code
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'ui-vendor': ['lucide-react', 'react-icons', 'swiper'],
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
