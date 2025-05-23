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
        dinamic: "var(--font-size)",
      },
      colors: { ...COLORS_CUSTOM },
    },
  },
  themes: {},
  darkMode: "class",
  important: true,
  plugins: [
    nextui({
      themes: {
        // light: {
        //   extend: "default",
        //   colors: { ...COLORS_CUSTOM },
        // },
        // dark: {
        //   extend: "default",
        //   colors: { ...COLORS_CUSTOM },
        // },
        // navidad: {
        //   // extend: "light",
        //   colors: colors_navidad,
        // },
      },
    }),
    plugin(function ({ addVariant }) {
      addVariant("navidad", ".navidad &");
    }),
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
