import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7F5",
        text: "#121212",
        muted: "#5F6368",
        cta: "#FF4D00",
        surface: "#FFFFFF"
      }
    }
  },
  plugins: []
};

export default config;
