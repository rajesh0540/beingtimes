/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB4570",
        primary_light: "#FB4570",
        secondary: "#ff005b",
      },
      backgroundImage: {
        "gradient-black":
          "linear-gradient(to bottom, transparent 0%, transparent 40%, black 70%, black 100%)",
      },
    },
  },
  plugins: [],
};
