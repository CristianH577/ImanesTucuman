const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");

const { COLORS_CUSTOM } = require("./src/consts/siteConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      minWidth: {
        screen: "100vw",
      },
      fontSize: {
        prima: "var(--font-size-primary)",
        second: "var(--font-size-secondary)",
        tert: "var(--font-size-tertiary)",
      },
      colors: { ...COLORS_CUSTOM },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: "var(--font-size-primary)",
          },
        },
      }),
    },
  },
  themes: {},
  darkMode: "class",
  important: true,
  plugins: [
    nextui({
      themes: {},
    }),
    plugin(function ({ addVariant }) {
      addVariant("navidad", ".navidad &");
    }),
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
    require("@tailwindcss/typography"),
  ],
};
