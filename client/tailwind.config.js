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
          light: '#F8FAFC',
          card: '#FFFFFF',
          secondary: '#F1F5F9',
        },
        pastel: {
          blue: '#E0E7FF', // Soft Indigo / Light Blue
          lavender: '#F3E8FF', // Soft Purple
          pink: '#FFE4E6', // Soft Coral Pink
          mint: '#D1FAE5', // Soft Mint Green
          yellow: '#FEF3C7', // Soft Gold/Yellow
        },
        electric: {
          DEFAULT: '#4F46E5', // Indigo Electric
          hover: '#4338CA',
          light: '#818CF8',
        },
        coral: {
          DEFAULT: '#F43F5E', // Coral Pink
          hover: '#E11D48',
          light: '#FB7185',
        },
        primary: '#0F172A', // Slate 900
        secondary: '#64748B', // Slate 500
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(79, 70, 229, 0.08)',
        card: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'pastel-glow': '0 0 30px 0px rgba(129, 140, 248, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
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
