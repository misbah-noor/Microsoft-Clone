const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      barlow : ['Barlow', 'sans-serif'],
      londrina : ["Londrina Outline", 'sans-serif'],
      roboto : ['Roboto', 'sans-serif']
    },
    keyframes: {
      'slide-in' : {
        '0%' :{ transform: 'translateX(80%)', opacity:'0'},
       '100%' : { transform: 'translateX(0)', opacity:'1'}
      }
    },
    animation: {
      'slide-in' :'slide-in 0.5s ease-out forwards',
    },
  },
  },
  plugins: [],
}
