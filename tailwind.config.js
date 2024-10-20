/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ['"Clash Display"', "sans-serif"],
      },
      colors: {
        "cust-red": "#eb6061",
        "cust-dark": "#1e1e1e",
        "cust-light-dark": "#1d1d1d",
        "cust-light": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
