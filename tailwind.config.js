export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#212174',
        'darkBackground':'#1a1a1a',
        'secondary':'#1c1c1c',
        'darkDialogBackground':'#282828',
        'darkPrimary':'#242424',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

