import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "fade-in-from-top": {
          from: {
            opacity: "0",
            transform: "translateY(-1rem)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in-from-top": "fade-in-from-top 0.5s ease-out"
      }
    },
  },
  plugins: [],
};

export default config;