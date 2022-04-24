module.exports = {
  content: [
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    colors:{
      'green': '#45c14e',
      'lightgreen':'#dff8eb',
      'cyan':'#4ee8e2',
      'deepblack': '#002c43',
      'black':'#00324b',
      'white':'#fcfcfc'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '840px',
      // => @media (min-width: 840px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
