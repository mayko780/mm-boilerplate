module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.ts', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#222',
        black: {
          light: '#313131',
          DEFAULT: '#222',
          dark: '#171717',
        },
        white: '#ddd',
        green: '#a2ff00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
