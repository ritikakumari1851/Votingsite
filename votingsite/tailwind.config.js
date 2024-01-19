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
      },
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}