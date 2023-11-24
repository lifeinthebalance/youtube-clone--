import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          text: colors.neutral[600],
          dark: colors.neutral[800],
          darkHover: colors.neutral[900],
        },
      },
    },
  },
  plugins: [],
};
