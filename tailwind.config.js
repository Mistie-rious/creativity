/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lusitana': ['Lusitana', 'serif'],
      'Inter': ['Inter', 'san-serif']
      
    },
    extend: {},
  },
  plugins: [],
}