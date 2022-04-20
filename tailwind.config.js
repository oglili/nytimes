const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      screens: {
      'xs': '475px',
      'ss': '474px',
      ...defaultTheme.screens,
      },
    
  },
  plugins: [],
}
