/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "15rem",
    },
    extend: {
      screens: {
        xs: "400px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1500px",
      },
      colors: {
        blue: {
          DEFAULT: "#082d64",
          light: "#176aac",
        },
        orange: {
          DEFAULT: "#fd8300",
          light: "#f1952f",
        },
        body: "#e5e5e5",
        white: "#fff",
        black: {
          DEFAULT: "#0d0c0b",
          heavy: "#000000",
        },
        grey: {
          DEFAULT: "#232323",
          light: "#2A3439",
        },
      },
      fontFamily: {
        nunitoSans: ["var(--font-nunito-sans)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        hero: "url(/hero.webp)",
        meeting2: "url(/meeting2.webp)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
