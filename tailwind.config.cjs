/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'permanent' : ['"Pacifico"', 'cursive'],
        'montserrat' : ['"Montserrat"', 'sans-serif']
      },
      animation: {
        'pingcursor' : 'pulse 1s infinite', 
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: 0
          }
        }
      },
    },
  },
  plugins: [],
}
  