/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        "beige": "#F1BEB3",
        "primary-blue": "#494EB0"
      },
      fontFamily: {
        "titan-one": ['Titan One', "cursive"]
      },
      dropShadow: {
        "neubrutalism": "-1vh 1vh 0px rgba(73, 78, 176, 1)"
      }
    },
  },
  plugins: [],
}
