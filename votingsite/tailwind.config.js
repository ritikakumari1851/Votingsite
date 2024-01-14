/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
   
  ],
  theme: {
    extend: {
      fontFamily:{
        display:["Dancing script","swap"],
        tempo:["Caveat","swap"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}