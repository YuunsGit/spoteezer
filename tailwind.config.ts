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
        spotidark: "#181818",
        spotigreen: "#1ed760",
      },
      fontFamily: {
        sans: ["var(--font-circular-std)"],
      },
      containers: {
        "3col": "52rem",
        "4col": "66rem",
        "5col": "85rem",
        "6col": "98rem",
        "7col": "110rem",
        "8col": "123rem",
        "9col": "136rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
