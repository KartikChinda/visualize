import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark: "#7CD213", 
        primaryLight: "#96eb2e", 
        bgPeach: "#FAEFDD",
        textBrown: "#292420",
        textPeach: "#FCFAF6",
      },
      fontFamily : {
        "hero-heading": ["Bebas Neue"],
        "loader-text": ["Fascinate"],
        "subtext-heebo": ["Heebo"],
        "subtext-lora": ['Lora'],
        "heading-playfair": ['Playfair Display'],
        "heading-barlow": ["Barlow Semi Condensed"],
        "subtext-mont": ["Montserrat"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
