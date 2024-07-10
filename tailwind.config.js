/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        headText: "#3D9970",
        smallText: "rgb(215, 214, 214)",
        headText2: "#3D9970",
      },
      fontSize: {
        headText: "3rem",
      },
      fontWeight: {
        headText: "bold",
      },
    },
  },
  plugins: [],
};
