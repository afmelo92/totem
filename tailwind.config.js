/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
