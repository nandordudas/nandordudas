/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('windicss/defaultTheme')
const colors = require('windicss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/line-clamp'),
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      padding: {
        '2cm': '2cm',
        '1.8cm': '1.8cm',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
}
