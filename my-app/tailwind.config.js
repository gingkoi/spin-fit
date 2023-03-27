/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        alatsi: ["Alatsi", "sans-serif"],
      },
      colors: {
        primary: "#5763e5",
        text: "#6b7280",
      },
    },
  },
  plugins: [],
};
