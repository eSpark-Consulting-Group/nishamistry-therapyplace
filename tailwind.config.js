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
    },
    fontFamily: {
      LGCL: 'Louis George Café Light, sans-serif',
      LGC: 'Louis George Café, sans-serif',
      LGCB: 'Louis George Café Bold, sans-serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
