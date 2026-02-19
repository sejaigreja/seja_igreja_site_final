import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',            // indica que o index.html está na raiz
  publicDir: 'public',  // aponta para a pasta public/ onde ficam as imagens estáticas
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})

