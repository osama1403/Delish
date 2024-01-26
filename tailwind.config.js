/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#ff6600',
        primarylight:'#ff7418'
      },
      fontFamily:{
        Dancing:["Dancing Script","cursive"],
      }
    },
  },
  plugins: [],
}

