import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#0B0B0B",
        graphite: "#1A1A1A",
        signal: "#E11D2E",
        steel: "#B9C0C8"
      },
      boxShadow: {
        "red-glow": "0 18px 60px rgba(225, 29, 46, 0.22)",
        "panel": "0 18px 70px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "metal-line":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
