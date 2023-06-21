import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      '@':  path.resolve(__dirname, '/src')
    }
  },

  assetsInclude: ['**/*.vtt']

})  
