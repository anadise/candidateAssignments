const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("./src/designTokens/index");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
