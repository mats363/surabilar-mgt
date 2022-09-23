/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    screens: {
      tablet: '744px',
      desktop: '1440px'
    },
    colors: {
      'sun-light': '#E9C177',
      sun: '#E59D17',
      'sun-dark': '#996A11',
      'fire-light': '#B96377',
      fire: '#7D001D',
      'fire-dark': '#4C0E1D',
      'water-light': '#557AD8',
      water: '#294691',
      'water-dark': '#1F346A',
      wind: '#F5F5F5',
      earth: '#046735',
      black: '#000000'
    },
    fontSize: {
      Magic_2: ['43px', {fontWeight: 'bold'}],
      Magic_3: ['30px', {fontWeight: 'bold'}],
      Magic_4: ['24px', {fontWeight: 'bold'}],
      Magic_5: ['24px', {fontWeight: 'regular'}],
      Magic_6: ['20px', {fontWeight: 'bold'}],
    },
    fontFamily: {
      'openSans': ['Open_Sans', 'sans-serif'] 
    },
    backgroundImage: {
      Hero1: "url(./images/campbell-white-volcanic-toll.jpg)",
    },

    
    extend: {},
  },
  plugins: [],
}



