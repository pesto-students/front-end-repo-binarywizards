/** @type {import('tailwindcss').Config} */

// import { colors as defaultColors } from "tailwindcss/defaultTheme";

// const colors = {
//   ...defaultColors,
//   ...{
//     primary: "#42389D",
//   },
// };
export default {
  // darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: colors,
    extend: {},
  },
  plugins: [],
};
