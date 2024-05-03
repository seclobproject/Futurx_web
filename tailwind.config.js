/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // hero: "url('./src/assets/bghero.png')",
        hero: "url('./src/assets/last-02.png')",
        // revolution:"url('./src/assets/revolution.jpg')",
        revolution:"url('./src/assets/web image new-01.svg')",
        roadmap:"url('./src/assets/roadmap.png')"
      
      },
      
      
    },
  },
  plugins: [],
};
