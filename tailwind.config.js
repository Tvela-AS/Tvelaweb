/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          700: '#1c222c',
          800: '#141920',
          900: '#0c1016',
          950: '#07090c',
        },
        brass: {
          200: '#ead9b4',
          300: '#dcc59a',
          400: '#c9a36a',
          500: '#b5894e',
          600: '#8f6c3c',
        },
        parchment: {
          50: '#f4efe6',
          100: '#e8e2d6',
          200: '#cfc7b8',
          400: '#9a9284',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-white':
          'linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
};
