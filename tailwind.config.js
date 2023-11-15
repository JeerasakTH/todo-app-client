/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Arial, san-serif",
    },
    extend: {
      colors: {
        LightBlue: "#A18AFF",
        LavenderBlush: "#CA8BFE",
        SkyBlue: "#3FD4F4",
        LightSalmon: "#FD99AF",
        AshGray: "#717082",
        Marigold: "#FAC608",
      },
    },
  },
  plugins: [],
};
