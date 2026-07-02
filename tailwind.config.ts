import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F7F4EF",
        sand: "#EAE3D9",
        ink: "#1C1B19",
        stone: "#6B6560",
        clay: "#B0684F",
        olive: "#7C7A5A",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.08)" } },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        kenburns: "kenburns 12s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
