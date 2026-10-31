/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diwali: {
          burgundy: '#4A071D',
          maroon: '#690D2A',
          gold: '#FFD36A',
          'gold-light': '#FFE494',
          'gold-dark': '#D4A034',
          orange: '#F28C28',
          'orange-glow': '#FF9F43',
          cream: '#FFF1D5',
          'cream-soft': '#FAF2E4',
          dark: '#200914',
          darker: '#14050D',
          card: '#2D0E1D',
          'card-hover': '#381325',
          border: '#5C172E',
          'border-gold': 'rgba(255, 211, 106, 0.25)',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'diwali-glow': '0 0 25px -5px rgba(242, 140, 40, 0.35), 0 0 10px -2px rgba(255, 211, 106, 0.2)',
        'gold-glow': '0 0 30px -5px rgba(255, 211, 106, 0.4)',
        'maroon-glow': '0 10px 30px -10px rgba(105, 13, 42, 0.5)',
      },
      animation: {
        'diya-flicker': 'diyaFlicker 2.5s ease-in-out infinite alternate',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        diyaFlicker: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: '1', filter: 'drop-shadow(0 0 8px rgba(255, 211, 106, 0.8))' },
          '25%': { transform: 'scale(0.96) translateY(1px)', opacity: '0.85', filter: 'drop-shadow(0 0 5px rgba(242, 140, 40, 0.6))' },
          '50%': { transform: 'scale(1.04) translateY(-1px)', opacity: '0.95', filter: 'drop-shadow(0 0 12px rgba(255, 211, 106, 0.9))' },
          '75%': { transform: 'scale(0.98) translateY(0.5px)', opacity: '0.9', filter: 'drop-shadow(0 0 7px rgba(255, 159, 67, 0.7))' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
