/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "12px",
        // sm: "16px",
        // md: "32px",
        // lg: "64px",
        // xl: "80px",
        // "2xl": "96px",
        DEFAULT: "12px",
        sm: "16px",
        md: "32px",
        lg: "64px",
        xl: "20px",
        "2xl": "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", "sans-serif"],
        publicSans: ["Public Sans", "sans-serif"],
      },
      colors: {
        primary: "#0E2341",
        secondary: "#E78DD2",
        tertiary: "#F1F3F8",
        success: "#3789FF",
        accent: "#ECF1F4",
        light: "#FAFCFE",
        gray: "#6D737A",
        disable: "#637381",
      },
    },
  },
  plugins: [],
};
