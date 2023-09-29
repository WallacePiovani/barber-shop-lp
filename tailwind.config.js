/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ['Open Sans','sans-serif']
      }
    },
    colors:{
      'preto': '#212123',
      'marrom': '#ad987d',
      'branco': '#FFF',
      'branco2': '#e1e1e1'

    }
  },
  plugins: [],
}

