import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '', // <- IMPORTANTE: deixe string vazia ou '/' para Netlify
})
