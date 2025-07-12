/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D2B',  // Azul base
        accent: '#00FF00',   // Verde neón
        muted: '#888888',    // Gris medio
        light: '#E0E0E0',    // Texto claro
        dark: '#1A1A1A',     // Fondo oscuro alterno
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
