export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['animate-toast-slide-in', 'bg-green-500', 'bg-red-400', 'bg-blue-500'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#212174',
        'darkBackground':'#1a1a1a',
        'secondary':'#1c1c1c',
        'darkDialogBackground':'#282828',
        'darkPrimary':'#242424',darkPrimaryBorder:"#3d3d3d",
      },
      animation: {
        'toast-slide-in': 'toastSlideIn 0.5s ease-out forwards',
        'toast-fade-out': 'toastFadeOut 0.5s ease-in forwards',
      },
      keyframes: {
        toastSlideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        toastFadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

