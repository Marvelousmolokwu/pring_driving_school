/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grayishBlue: "#748da6",
      darkGray: "#576f72",
      grey: "#562349",
      back: "rgba(255, 255, 255, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
