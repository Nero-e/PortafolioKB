import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      boxShadow: {
        'custom-dark': '0px 4px 4px rgba(16, 15, 17, 25%)',
        'custom-nav': '0 30px 60px rgba(0, 0, 0, 0.12)',
        'custom-map': '36px 36px 53px #c21843, -36px -36px 53px #ff286d'
      },

      colors: {
        "flash-white": {
          DEFAULT: "#F1F0F1",
          "200": "rgba(241, 240, 241, 0.7)",
        },
        night: {
          DEFAULT: "#0C0C0D",
        },
        seasalt: {
          DEFAULT: "#F8F8F8",
          "100": "#efefef",
          "200": "#dcdcdc",
        },
        tekgelet: {
          DEFAULT: "#5A189A",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        satoshiItalic: ["SatoshiItalic", "sans-serif"],
      },
      fontSize: {
        "lg/xl": "clamp(1.125rem ,1.036rem + 0.223vw, 1.25rem)",
        "xl/3xl": "clamp(1.25rem ,0.804rem + 1.116vw, 1.875rem)",
        "2xl/3xl": "clamp(1.5rem, 1.232rem + 0.67vw, 1.875rem)",
        "6xl/9xl": "clamp(3.75rem ,0.71rem + 7.59vw, 8rem)",
      },
    },
  },
  plugins: [],
};
export default config;
