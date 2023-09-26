/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
      container: {
        center: true,
        padding: '16px',
      },
    extend: {
      colors : {
        primary: '#dc2626',
        secondary: '#94a3b8',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}