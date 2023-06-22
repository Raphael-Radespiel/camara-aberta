/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
