import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F0EDE8",
        text: "#0C0C0C",
        muted: "#5C5A57",
        cta: "#FF4D00",
        "cta-hover": "#E64500",
        surface: "#FFFFFF",
        ink: "#0A0A0A",
        mist: "#E8E4DD"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(255, 77, 0, 0.45)",
        card: "0 25px 50px -12px rgba(12, 12, 12, 0.12)",
        "card-lg": "0 32px 64px -16px rgba(12, 12, 12, 0.18)",
        inset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.6)"
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 80% 60% at 70% -10%, rgba(255, 77, 0, 0.22), transparent 55%), radial-gradient(ellipse 50% 45% at 0% 50%, rgba(255, 180, 120, 0.18), transparent 50%), radial-gradient(ellipse 40% 35% at 100% 80%, rgba(12, 12, 12, 0.06), transparent 45%)",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
