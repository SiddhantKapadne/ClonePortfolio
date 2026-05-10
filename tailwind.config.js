/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f8f9fb',
        ink: '#313743',
        muted: '#8f97a3',
        line: '#e4e8ee',
        accent: '#b8f8c8',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18, 22, 31, 0.02), 0 14px 30px rgba(28, 38, 58, 0.03)',
      },
    },
  },
  plugins: [],
}

