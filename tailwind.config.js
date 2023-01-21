/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ["Poppins"]
      },
      colors :{
        background: '#180613',
        pink : '#8B2097',
        pink1 : "#84248E",
        pink2 : "#581674"
      }
    },
  },
  plugins: [],
}