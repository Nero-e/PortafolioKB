import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Breakpoints
      screens: {
        'xs': {'max': '639px'},
      },

      // Grid Template Columns
      gridTemplateColumns: {
        '1.5fr': '1.5fr 1fr',
        'custom': '1fr 1.5fr 1fr',
      },

      // Background Images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Background Size
      backgroundSize: {
        '200': '200%',
      },

      // Colors
      colors: {
        'seasalt': {
          DEFAULT: '#F8F8F8',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
        },
        'anti-flash-white': {
          DEFAULT: '#F1F0F1',
          '200': 'rgba(241, 240, 241, 0.7)',
        },
        'night': {
          '50': '#f5f5f6',
          '100': '#e5e5e8',
          '200': '#ceced3',
          '300': '#acadb4',
          '400': '#83858d',
          '500': '#686a72',
          '600': '#595a61',
          '700': '#4c4d52',
          '800': '#434347',
          '900': '#3b3b3e',
          DEFAULT: '#0C0C0D',
        },
        'eerie-black': {
          DEFAULT: '#181719',
          '100': '#1D1C1E',
        },
      },

      // Box Shadows
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark-top': '0px 4px 4px rgba(16, 15, 17, 25%), 0px -1px 0px rgba(16, 15, 17, 3%)',
        'custom-dark': '0px 4px 4px rgba(16, 15, 17, 25%)',
      },

      // Fonts
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        satoshiItalic: ['SatoshiItalic', 'sans-serif'],
        supreme: ['Supreme', 'sans-serif'],
      },
      
      // Transitions
      transitionProperty: {
        'background-position': 'background-position',
        'border': 'border',
        'color': 'color',
      },
    },
  },
};

export default config;