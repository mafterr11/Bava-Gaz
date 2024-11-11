/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
          DEFAULT: "#eb6224",
          light: "#f1952f",
        },
      },
      fontFamily: {
        nunitoSans: ["var(--font-nunito-sans)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
