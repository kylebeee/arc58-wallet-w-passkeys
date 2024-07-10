import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        akita: {
        '50': '#faf5ff',
        '100': '#f3e9fe',
        '200': '#e9d6fe',
        '300': '#d8b6fc',
        '400': '#c087f9',
        '500': '#a859f3',
        '600': '#9439e6',
        '700': '#7e26ca',
        '800': '#6b24a5',
        '900': '#581e85',
        '950': '#3b0962',
        },
      },
    },
  },
  plugins: [],
};
export default config;
