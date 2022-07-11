/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1200px'
    }
  },
  plugins: []
};
