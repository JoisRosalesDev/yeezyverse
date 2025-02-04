module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'radial-gradient(ellipse at bottom right, #1d4ed8, #0f0f12, #0f0f12);',
        'secondary': 'linear-gradient(to bottom, #27272a, #18181b, #0f0f12);',
        'hero': 'radial-gradient(ellipse at top left, #1d4ed8, #0f0f12, #0f0f12);',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'serif'],
      },
    },
  },
  plugins: [],
};
