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
        bkg: "var(--color-bkg)",
        accent: "var(--color-accent)",
        accentSecondary: "var(--color-accent-secondary)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
