/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

