import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'seasalt': {
          DEFAULT: '#F8F8F8',
        }, 
        'anti-flash-white': {
          DEFAULT: '#F1F0F1',
          '200': 'rgba(241, 240, 241, 0.7)'
        },
        'night':{
          DEFAULT: '#0C0C0D',
        },
        'eerie-black': {
          DEFAULT: '#181719',
          '100': '#1D1C1E'
        },
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark-top': '0px 4px 4px rgba(16, 15, 17, 25%), 0px -1px 0px rgba(16, 15, 17, 3%)',
        'custom-dark': '0px 4px 4px rgba(16, 15, 17, 25%)',
        
      },
    },
  },
  plugins: [],
};
export default config;
