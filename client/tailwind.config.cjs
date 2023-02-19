/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'shantell': ['Shantell Sans', 'serif'] 
      },
      backgroundImage: {
        'hero': "url('./assets/images/travelhome.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}