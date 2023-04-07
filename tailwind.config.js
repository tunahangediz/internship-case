/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hipo-gray4": "#0A0A0A",
        "hipo-gray16": "#292929",
        "hipo-gray17": "#A0A0A0",
        "hipo-dark-gray": "#ACACAC",
        "hipo-light-green": "#72F2E4",
        "hipo-green": "#0DA090",
      },
      keyframes: {
        skeleton: {
          "0%": { backgroundColor: "#222222" },
          "50%": { backgroundColor: "#484848" },
          "100%": { backgroundColor: "#222222" },
        },
      },
      animation: {
        skeleton: "skeleton 1.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
