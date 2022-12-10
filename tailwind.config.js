/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#292929',
    },
    extend: {
      height: {
        140: '140px',
        550: '550px',
        54: '54px',
      },
      width: {
        490: '490px',
        273: '273px',
      },
      fontFamily: {
        dmsans: ['DM Sans'],
      },
      flexBasis: {
        80: '300px',
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },
      screens: {
        ipad: '1024px',
        se: '375px',
      },
    },
  },
  plugins: [],
};
