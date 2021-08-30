module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1284px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1536px",
      // // => @media (min-width: 1536px) { ... }

      narrow: {
        raw: "(max-aspect-ratio: 1/1)",
      },
      wide: {
        raw: "(min-aspect-ratio: 1/1)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      blue: {
        50: "#ecf8ff",
        100: "#c3e6ff",
        200: "#9bd4ff",
        300: "#75c0ff",
        400: "#50aaff",
        500: "#2b94ff",
        600: "#0e7cff",
        700: "#0062c4",
        800: "#01488b",
        900: "#0e2f56",
      },
      gray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      purple: {
        500: "#daddf5",
        600: "#b6bceb",
      },
    },
    fontFamily: {
      favorit: ["'favorit', sans-serif"],
      sans: ["favorit, sans-serif"], //Helvetica Neue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
