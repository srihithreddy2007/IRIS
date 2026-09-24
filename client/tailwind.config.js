/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0B0D14',
          card: '#141927',
          secondary: '#20283B',
        },
        electric: {
          DEFAULT: '#7DA9FF',
          hover: '#6093FF',
        },
        coral: {
          DEFAULT: '#FF6B78',
          hover: '#FF5262',
        },
        primary: '#F7F8FC',
        secondary: '#A5AEC2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(125, 169, 255, 0.25)',
        'coral-glow': '0 0 25px -5px rgba(255, 107, 120, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
