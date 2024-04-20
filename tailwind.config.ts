import { m } from "framer-motion";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react"); 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        logone: {
          black: '#1A1A1A', 
          pink: '#ED5C9B', 
          blue: '#748CAB', 
          cream: '#F0EBD8', 
          cream_dark: '#e0dcc8',
          cream_light: 'f6f3e7',
          green: '26C485', 
        }
      }, 
      fontFamily: { 
        sans: ["var(--font-exo-2)"],
        mono: ["var(--font-roboto-mono)"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      maxHeight: {
        '128': '32rem', // You might adjust this based on your actual content size
        'full': '100%',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
