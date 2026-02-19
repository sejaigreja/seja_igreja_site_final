module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6861ec',    // Seu roxo original
        secondary: '#2684eb',  // Seu azul original
        fundo: '#0e0e0e',      // Mantendo suas cores personalizadas
        whatsapp: '#25D366'    // que já estavam sendo usadas
      }
    },
  },
  plugins: [],
}