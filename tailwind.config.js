/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files in src
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6B7AFF', // A nice elegant blue/purple
          DEFAULT: '#512DA8', // Deeper purple
          dark: '#311B92',
        },
        secondary: '#FFC107', // Accent color - a warm yellow/gold
        background: {
          light: '#F7F9FC',
          dark: '#1A202C',
        },
        text: {
          light: '#1A202C',
          dark: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Modern, readable font
        heading: ['Montserrat', 'sans-serif'], // Slightly more stylized for headings
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}