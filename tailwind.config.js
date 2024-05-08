/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fondFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 20%',
      }
    },
  },
  plugins: [],
}