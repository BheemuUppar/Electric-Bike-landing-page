/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#424242",
          200: "#2C2A2A",
          300: "#3C3C3C",
          400: "#414141",
          500: "#373737",
        },
        black: {
          100: "#252525",
          200: "#202020",
          300: "#131313",
        },
        white: {
          100: "#FFFFFF",
          200: "#EDEDED",
          300: "#F2F2F2",
          400: "#FAFAFA",
        },
        yellow: {
          500: "#F9ED32",
          400: "#FFF225",
        },
      },
    },
  },
  plugins: [],
};
