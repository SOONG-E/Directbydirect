/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'short-shake': 'short-shake',
      },
      colors: {
        'bar-gray': '#dddddd',
        midblack: '#353535',
      },
      keyframes: {
        'short-shake': {
          '0%, 100%': { transform: 'translateX(-1.5px)' },
          '50%': { transform: 'translateX(1.5px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
