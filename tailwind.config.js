/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#00abe0",
        "secondary":"#080808"
      }
    },
  },
  plugins: [ daisyui],
}
// "#00ffee",