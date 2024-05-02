/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/bghero.jpg')",
        revolution:"url('./src/assets/revolution.jpg')",
        roadmap:"url('./src/assets/roadmap.png')"
      
      },
      
    },
  },
  plugins: [],
};
