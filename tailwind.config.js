/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bar-gray': '#dddddd',
        midblack: '#353535',
      },
    },
  },
  plugins: [],
};
