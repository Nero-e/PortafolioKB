import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'},
      },
      gridTemplateColumns: {
        '1.5fr': '1.5fr 1fr',
        'custom': '1fr 1.5fr 1fr',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        'harvest-gold': '#DAA520',
        'amber': '#FFBF00',
        'mikado-yellow': '#FFC40C',
        'sunglow': '#FFCC33',
        'mustard': '#FFDB58',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark-top': '0px 4px 4px rgba(16, 15, 17, 25%), 0px -1px 0px rgba(16, 15, 17, 3%)',
        'custom-dark': '0px 4px 4px rgba(16, 15, 17, 25%)',
        
      },
      fontFamily: {
        alfredinoSemirounded: ['AlfredinoSemirounded', 'sans-serif'],
        alfredinoTuttocurvy: ['AlfredinoTuttocurvy', 'sans-serif'],
        alfredinoSemimono: ['AlfredinoSemimono', 'monospace'],
        author: ['Author', 'sans-serif'],
        authorItalic: ['AuthorItalic', 'sans-serif'],
        dailyBubble: ['DailyBubble', 'sans-serif'],
        gemola: ['Gemola', 'sans-serif'],
        manusia: ['Manusia', 'sans-serif'],
        satochi: ['Satoshi', 'sans-serif'],
        satochiItalic: ['SatoshiItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
