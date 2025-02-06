import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode using a class
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d16527",
        primaryhover: "#b3521a",
        background: "var(--background)",
        foreground: "var(--foreground)",
        blackOne: "#121212",
        blackTwo: "#181818",
        whiteOne: "#ffffff",
        whiteTwo: "#f9f9f9",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "ui-sans-serif", "system-ui", "sans-serif"], // Add Chakra Petch font
      },

      boxShadow: {
        "dark": "0 2px 50px rgba(0, 0, 0, 0.7)", // Custom dark shadow
      },
      screens: {
        xs: "475px", // Add the xs breakpoint for very small screens
      },
    },
  },
  plugins: [],
} satisfies Config;
