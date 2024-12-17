/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#02073E",
          200: "#0F2137",
        },
        red: {
          100: "#EA3A60",
        },
      },
    },
  },
  plugins: [],
};

