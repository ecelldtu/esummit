/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        carousel11: 'calc(250px * 11)',
      },
      fontFamily : {
        poppins : ["Poppins"]
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          // '75%': { transform: 'translateX(calc(-25px * 14))' },
          '100%': { transform: 'translateX(calc(-100px * 14))' },
        },
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