import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "var(--text-black)",
        gray: "var(--text-gray)",
      },

      fontSize: {
        sm: "var(--font-sm)",
        md: "var(--font-md)",
        lg: "var(--font-lg)",
      },

      fontWeight: {
        bold: "var(--font-bold)",
      },
    },
  },

  plugins: [],
};
export default config;
