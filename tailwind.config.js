/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       poppins: ['Poppins'],
      },
      colors: {
        'custom-cyan': '#04A7C3',
        'custom-blue': '#F2FBFC',
      },
    },
  },
  plugins: [],
}

