/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        Black: "#1E2832",
        primayBG: "#1e28320d",
      },
      fontFamily: {
        primary: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};