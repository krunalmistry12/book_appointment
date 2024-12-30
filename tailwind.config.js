/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      },
      /*top doctor ne frame and line ma karva mate use kri ae chhe and topdoctor.jsx ma col-auto lakhyu chhhe */
      gridTemplateColumns:{ 
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

