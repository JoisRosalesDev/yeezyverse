module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(to top, #27272a, #18181b, #0f0f12);',
        'secondary': 'linear-gradient(to bottom, #27272a, #18181b, #0f0f12);',
        'hero': 'linear-gradient(to top, #0f0f12, #18181b, #1d4ed8);',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'serif'],
      },
    },
  },
  plugins: [],
};
