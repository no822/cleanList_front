/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width'
      },
      keyframes: {
        slide: {
          // '0%': {transform: 'translateX(100%)'},
          // '100%': {transform: 'translateX(0%)'}
        }
      },
    },
  },
  plugins: [
      require("daisyui"),
      require("tailwindcss-animation-delay"),
      require("tailwindcss-animate"),
      require('@tailwindcss/typography'),
  ],
}
