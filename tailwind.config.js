/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Primary */
        'Moderate-Blue': '#5457b6',
        'Soft-Red': '#ed6468',
        'LightGrayish-Blue': '#c3c4ef',
        'Pale-Red': '#ffb8bb',

        /* Neutral */
        'Dark-Blue': '#324152',
        'Grayish-Blue': '#67727e',
        'Light-Gray': '#ebedf2',
        'Very-Light-Gray': '#f5f6fa',
        "Backgroun": '#f5f7fb'
      },

      fontFamily: {
        Rubik: ['Rubik']
      }
    }
  },
  plugins: []
}
