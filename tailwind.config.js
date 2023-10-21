/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#C4C4C4",
        "pale-blue": "#F5F6FF",
        "dull-black": "#333333",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [],
};
