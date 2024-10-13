/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'NavyBlue': '#05445E',
        'BlueGrotto': '#189AB4',
        'BlueGreen': '#75E6DA',
        'BabyBlue': '#D4F1F4',
      },
    },
  },
  plugins: [],
}

