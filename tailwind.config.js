/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const snowMountain = {
  ...defaultColors,
  ...{
    transparent: "transparent",
    red: "#b56660",
    green: "#9bbaaf",
    blue: "#46819e",
    yellow: "#dbabbc",
    bgDark: "#242e4f",
    fgDark: "#ffffff",
    bgLight: "#ffffff",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: snowMountain,
    extend: {
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/hero-wallpaper.png')",
      },
    },
  },
  plugins: [],
};
