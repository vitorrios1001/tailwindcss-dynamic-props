module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--theme-primary)',
      secondary: 'var(--theme-secondary)',
      background: '#2d2e2f'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
