/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#361a0c",
        honey: "#f5bf07",
      },
      fontFamily: {
        recoleta: ["Recoleta"],
      },
    },
    colors: {
      black: "#140200",
    },
  },
  plugins: [],
};
