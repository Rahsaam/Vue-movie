/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-color': {
          DEFAULT: '#ff0000',
          'dark-red': '#1D0000',
          'dark-gray': '#1D2024',
          'custom-orange': '#f37515',
          'pale-gray': '#1f2226',
          'hover-gray': '#414043',
          'primary-gray': '#151515',
          'dark-orange': '#663300',
          'secodary-gray': '#4d4d4d',
        }
      },
      width: {
        '80%': '80%',
        '70%': '70%',
        '25%': '25%',
        '20%': '20%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
        '30%': '30%',
      },
      height: {
        '100': '28rem',
      },
      fontSize: {
        '3sm': '10px',
        '2sm': '11px',
      },
    },
  },
  plugins: [],
}
