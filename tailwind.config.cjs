// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#32190F',
        deepEspresso: '#482719',
        terracotta: '#C85B2B',
        warmCopper: '#DE8240',
        cream: '#F8F2E9',
        softBeige: '#EDE0CF',
        darkText: '#28170F',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
