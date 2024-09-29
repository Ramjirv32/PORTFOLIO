/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'rotate-icon': 'rotate-icon 20s linear infinite',
      },
      keyframes: {
        'rotate-icon': {
          '0%': { transform: 'rotate(0deg) translateX(40%) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40%) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}