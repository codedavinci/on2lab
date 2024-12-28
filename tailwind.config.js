/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  daisyui: {
    themes: ['light', 'winter', 'night']
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ],
}