import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#B3B3B3",
        secondary: "#282828",
        spotigreen: "#1ed760",
      },
      fontFamily: {
        sans: ["var(--font-circular-std)"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
