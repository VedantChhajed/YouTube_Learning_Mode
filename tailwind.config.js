/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Keep this, it might be needed by plugins or future changes
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark mode colors are now the default
        background: '#0f0f0f',
        surface: '#1f1f1f',
        primary: '#3ea6ff',
        secondary: '#272727',
        'text-primary': '#ffffff',
        'text-secondary': '#aaaaaa',
      },
    },
  },
  plugins: [],
};