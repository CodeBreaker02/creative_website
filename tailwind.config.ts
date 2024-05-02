import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    clashGrotesk: ["var(--clash-grotesk-font)"],
    ranade: ["var(--ranade-font)"],
    supports: {
      sda: "timeline-scope: none",
    },
    fontsize: {
      xxs: "0.55rem",
    },
  },
  plugins: [containerQueries],
};
export default config;
