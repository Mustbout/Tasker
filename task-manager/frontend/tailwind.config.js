import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "btn": "#137C8B",
        "color-blob": "#A427DF"
      },
    },
    container: {
      center : true
    }
  },
  plugins: [require('flowbite-react')],
}
