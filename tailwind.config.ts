import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-black": "#020408",
        "cyber-dark": "#080d1a",
        "cyber-card": "#0d1526",
        "neon-cyan": "#00f5ff",
        "neon-cyan-dim": "#00c8d4",
        "electric-purple": "#8b5cf6",
        "deep-purple": "#4c1d95",
        "deep-blue": "#1a1f4e",
        "glass-white": "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, #020408 0%, #080d1a 50%, #0d1526 100%)",
        "neon-gradient": "linear-gradient(135deg, #00f5ff 0%, #8b5cf6 100%)",
        "purple-gradient": "linear-gradient(135deg, #8b5cf6 0%, #00f5ff 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(0,245,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.1)",
        "neon-purple": "0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.1)",
        "card-glow": "0 8px 32px rgba(0,245,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass": "0 8px 32px 0 rgba(0,0,0,0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "border-animate": "border-animate 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,245,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,245,255,0.7), 0 0 80px rgba(0,245,255,0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "border-animate": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
