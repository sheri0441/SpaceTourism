module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#0B0D17',
        'secandry' : '#D0D6F9',
        'neutral' : '#FFFFFF'
      },
      fontFamily : {
        'Bellefair' : ['Bellefair', 'serif'],
        'BarlowCond' :  ['Barlow Condensed', 'sans-serif'],
        'Barlow' : ['Barlow', 'sans-serif']
      },
      screens : {
        'desktop' : '1440px'
      }
    },
  },
  plugins: [],
}
