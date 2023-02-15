/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E2368',
        accent: '#E23744',
        body: '#444957',
        gray: {
          dark: '#424961',
          light: '#93A2D361',
          footer: '#646874',
          default: '#F8F8F8',
        },
        gradient: {
          start: '#1E2A5D0A',
          mid: '#303E820A',
          end: '#3C509D0A',
        },
      },
    },
  },
  plugins: [],
}
