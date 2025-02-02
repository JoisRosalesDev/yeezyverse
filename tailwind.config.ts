module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'discography': 'linear-gradient(to top, #27272a, #18181b, #0f0f12);',
        'awards': 'linear-gradient(to bottom, #27272a, #18181b, #0f0f12);',
        'hero': 'linear-gradient(to top, #0f0f12, #18181b, #1d4ed8);'
      }
    },
  },
  plugins: [],
};
