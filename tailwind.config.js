/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "hsla(58, 80%, 91%, 1)",
        accent: "#F2EF88",
        tomato: {
          primary: "#FA854F",
          light: "#FFEDDF"
        },
        foreground: '#FAF9D6'
      },
    },
  },
  plugins: [],
}
