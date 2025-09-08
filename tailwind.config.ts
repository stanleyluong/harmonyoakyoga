import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F6F3',     // Warm ivory - luxurious, clean
        secondary: '#E8E2DC',   // Soft linen - sophisticated, calming
        accent: '#B8A082',      // Warm taupe - elegant, grounding
        neutral: '#2C2C2C',     // Deep charcoal - refined text
        light: '#FEFDFB',       // Pure cream - premium feel
        sage: '#A8B5A0',       // Soft sage - spa-like accent
        stone: '#D4CFC7',      // Warm stone - natural luxury
      },
      fontFamily: {
        'heading': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '65ch',
      },
      borderRadius: {
        'brand': '12px',
        'luxury': '16px',
        'soft': '20px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
  // Performance optimizations
  corePlugins: {
    // Disable unused core plugins for smaller bundle size
    preflight: true,
    container: false, // We use custom container class
  },
}
export default config