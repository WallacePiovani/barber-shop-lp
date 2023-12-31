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
      },
      backgroundImage:{
        'hero-section-img': "url('src/assets/pexels-thgusstavo-santana-2040189.jpg')",
      },
      height: {
        '128': '38rem',
        '125': '34rem',
        '150': '40rem',
        '160': '42rem',
        '180': '50rem',
      },
      width: {
        '128': '38rem',
        '125': '34rem',
        '150': '40rem',
        '200': '100rem',
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

