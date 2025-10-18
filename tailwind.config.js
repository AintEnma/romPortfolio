/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FFFFFF',
        accent: '#FFF7E6',
        primary: '#F59E0B',
        dark: '#000000',
        black: '#000000',
        yellow: '#FCD34D',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #F59E0B, #FCD34D)',
        'gradient-accent': 'linear-gradient(to right, #FFF7E6, #FCD34D)',
      },
    },
  },
  plugins: [],
}
