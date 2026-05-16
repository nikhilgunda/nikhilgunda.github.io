/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["Fraunces", "Playfair Display", "Georgia", "serif"],
      },
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F3EDE3",
          300: "#E8DFD0",
        },
        clay: {
          500: "#B4633A",
          600: "#9A532F",
          700: "#7E4225",
        },
      },
    },
  },
  plugins: [],
};
