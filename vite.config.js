import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:"0.0.0.0"
  },
  optimizeDeps: {
    exclude: ['lightningcss'],
  },
  build: {
    // Définir la limite à 1000 ko (1 Mo) au lieu de 500 ko par défaut
    chunkSizeWarningLimit: 3000, 
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignorer spécifiquement les avertissements provenant de node_modules/lottie-web
        if (warning.code === 'EVAL' && warning.id.includes('lottie-web')) {
          return; 
        }
        if (warning.code === 'EVAL' && warning.id.includes('lottie-web-light')) {
          return; 
        }
        warn(warning); // Laisser passer tous les autres avertissements
      },
    },
  },
  resolve: {
    alias: {
      // 🚨 Rediriger les appels à 'lottie-web' vers 'lottie-web-light'
      'lottie-web': 'lottie-web-light', 
    },
  },
})
