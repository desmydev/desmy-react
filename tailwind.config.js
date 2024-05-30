export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
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

