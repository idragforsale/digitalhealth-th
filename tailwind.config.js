/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0a2e5c',
          light: '#0c3b73',
          dark: '#061d3d',
        },
      },
    },
  },
  plugins: [],
}

