
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        primary: 'radial-gradient(ellipse at bottom right, #1d4ed8, #0f0f12, #0f0f12);',
        secondary: 'radial-gradient(ellipse at top right, #1d4ed8, #0f0f12, #0f0f12);',
        hero: 'radial-gradient(ellipse at top left, #1d4ed8, #0f0f12, #0f0f12);',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'serif'],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (styles: { [key: string]: { [key: string]: string } }) => void;
  theme: (path: string) => { [key: string]: string };
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default tailwindConfig;
