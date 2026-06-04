/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#68825b",      // vert dominant
        "forest-dark": "#52684a",
        sand: "#FFE9D5",         // beige sable
        gold: "#FFBE83",         // beige doré
        sage: "#B9D0BD",         // vert sauge clair
        pool: "#BCD9DA",         // bleu piscine
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(104, 130, 91, 0.3)",
        glow: "0 0 40px rgba(255, 190, 131, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
