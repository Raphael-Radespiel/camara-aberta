/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyan: "#5AC7C7",
        yellow: "#FFFF42",
      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
