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
          primary: "#2D83AE",
          light: "#D1EEFC"
        },
        foreground: '#FFFFFF'
      },
    },
  },
  plugins: [],
}
