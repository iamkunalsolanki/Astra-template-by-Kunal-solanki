/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme': '#642FDE',
        'charcoal': '#3A3A3A',
      },
    },
  },
  plugins: [],
}