module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue': '#0F084B',
      'black': '#0D0221',
      'white': '#FFFFFF',
      'dark-blue': '#26408B',
      'crystal': '#A6CFD5',
      'silver': '#C4C4C4'
    },
    textColor: {
      'dark': '#828282',
      'dark-blue': '#26408B',
      'white': '#ffffff',
      'blue': '#0075FF',
      'black': '#0D0221'
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '35rem',
        '305px': '305px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
