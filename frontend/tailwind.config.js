/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#d946ef',
          500: '#a855f7',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(168, 85, 247, 0.25)',
      },
    },
  },
  plugins: [],
}
