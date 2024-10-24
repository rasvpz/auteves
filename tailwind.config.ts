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
      fontFamily: {
        afacad: ['"Afacad Flux"', 'sans-serif'],
      },
      boxShadow: {
        'white-lg': '0 0 4px 5px rgba(255, 255, 255, 0.5)', // Customize the spread and blur here
      },
      borderStyle: {
        dotted: 'dotted',
      },
    },
  },
  plugins: [],
};
export default config;
