module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      army: '#CCCC99',
      chocolate: '#CE7F59',
      mint: '#CCDCD9',
      navy: '#23254E',
      snow: '#FFFFFF',
      borderMint: '#CCDCD9',
      lightyellow: '#D0CC83',
      primary: '#23254E',
      lightOrange: '#CD7F59',
      lightOrange2: '#CD7F59',
    },
    fontFamily: {
      LGCL: 'Louis George Café Light, sans-serif',
      LGC: 'Louis George Café, sans-serif',
      LGCB: 'Louis George Café Bold, sans-serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
