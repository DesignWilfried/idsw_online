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
  build:{
    sourcemap:false,
    minify:'esbuild'
  },
  resolve: {
    alias: {
      // 🚨 Rediriger les appels à 'lottie-web' vers 'lottie-web-light'
      'lottie-web': 'lottie-web-light', 
    },
  },
})