/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        black: '#173A56',
        gray: {
          light: '#E3ECF6',
          default: '#BCD0E5',
          dark: '#544837',
        },
        primary: {
          default: '#FF9900',
          dark: '#BC770E'
        },
        purple: '#7752BE',
        red: '#F03E3D',
        blue: '#4DADF7',
      },
      backgroundPosition: {
        'item-menu': '0 100%',
      },
      backgroundSize: {
        'underline-extended': '100% .0625rem',
        'underline-hidden': '0 .0625rem',
      },
      aspectRatio: {
        'aspect-dual': [60, 49],
        'post-dual': [348, 185],
      },
      borderRadius: {
        'xl': '1.25rem',
      }
    },
  },
  plugins: [
    require('tailwind-fontawesome')({
      version: 6
    })
  ],
  safelist: [
    'fixed',
    'top-0',
    'right-0',
    'bg-white',
    'h-screen',
    'w-4/5',
    'block',
    'transform',
    'translate-x-0',
    'z-20',
    'lg:relative',
    'lg:translate-x-0',
    'lg:h-auto',
    'w-fit'
  ],
}
