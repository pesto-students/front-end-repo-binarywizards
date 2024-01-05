/** @type {import('tailwindcss').Config} */

export default {
  // darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#42389D",
        accent: {
          100: "#eeeefd",
          200: "#dedcfb",
          300: "#cdcbf9",
          400: "#bcb9f7",
          500: "#aca8f6",
          600: "#9b96f4",
          700: "#8a85f2",
          800: "#7973f0",
          900: "#6962ee",
          DEFAULT: "#5850EC",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
