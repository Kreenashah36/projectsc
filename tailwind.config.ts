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
				primary: "rgba(var(--main-color) / <alpha-value>)",
				white: "rgba(var(--main-white) / <alpha-value>)",
				secondary: "rgba(var(--border-color) / <alpha-value>)",
				foreground: "rgba(var(--bg-color) / <alpha-value>)",
				transparent: "transparent",
			},
      keyframe:{
        "slide":{
          "0%":{
            transform: "translateX(100%)"
          },
          "50%": { 
            transform: "translateX(-100%)" 
          },
          "100%":{
            transform: "translateX(100%)"
          }
        }
      },
      animation:{
        slide:'slide 10s linear infinite;' 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
