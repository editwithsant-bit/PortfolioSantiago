import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#03040b",
        navy: "#071126",
        cobalt: "#13a7ff",
        violet: "#8d4dff",
        aura: "#b268ff",
        ink: "#e8f1ff"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 32px rgba(19, 167, 255, 0.32), 0 0 60px rgba(141, 77, 255, 0.22)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.11), 0 24px 80px rgba(0,0,0,0.34)"
      }
    }
  },
  plugins: []
};

export default config;
