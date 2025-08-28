/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#005395',
          600: '#003d70',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        dark: {
          100: '#1a202c',
          200: '#2c5282',
          300: '#4a5568',
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
