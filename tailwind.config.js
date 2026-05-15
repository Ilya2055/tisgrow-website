/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07172f",
        ink: "#0f213d",
        aqua: "#14d3c5",
        skysoft: "#e8f7ff",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 23, 47, 0.12)",
        glow: "0 20px 70px rgba(20, 211, 197, 0.22)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "portal-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.65" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
        "particle-drift": {
          "0%": { transform: "translate3d(0, 20px, 0) scale(0.7)", opacity: "0" },
          "30%": { opacity: "0.8" },
          "100%": { transform: "translate3d(24px, -120px, 0) scale(1)", opacity: "0" },
        },
        "dna-spin": {
          "0%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "100%": { transform: "rotateY(360deg) rotateZ(18deg)" },
        },
        "pixel-dissolve": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "35%": { opacity: "0.9" },
          "100%": { opacity: "0", transform: "scale(1.4)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
        "border-spin": "border-spin 9s linear infinite",
        "portal-pulse": "portal-pulse 5.5s ease-in-out infinite",
        "particle-drift": "particle-drift 8s ease-in-out infinite",
        "dna-spin": "dna-spin 6s linear infinite",
        "pixel-dissolve": "pixel-dissolve 0.62s ease-out both",
      },
    },
  },
  plugins: [],
};
