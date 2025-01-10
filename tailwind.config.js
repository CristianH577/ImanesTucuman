const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");

const colors_default = {
  custom1: {
    DEFAULT: "#FF8B00",
    1: "rgba(255, 153, 0, 1)",
    2: "rgba(255, 167, 0, 1)",
    3: "rgba(255, 181, 0, 1)",
    4: "rgba(255, 195, 0, 1)",
    5: "rgba(255, 209, 0, 1)",
    6: "rgba(255, 222, 0, 1)",
    7: "rgba(255, 236, 0, 1)",
    8: "rgba(255, 250, 0, 1)",
    9: "rgba(255, 255, 0, 1)",
    10: "rgba(255, 255, 0, 1)",

    "-9": "rgba(230, 125, 0, 1)",
    "-8": "rgba(204, 111, 0, 1)",
    "-7": "rgba(179, 97, 0, 1)",
    "-6": "rgba(153, 83, 0, 1)",
    "-5": "rgba(128, 70, 0, 1)",
    "-4": "rgba(102, 56, 0, 1)",
    "-3": "rgba(76, 42, 0, 1)",
    "-2": "rgba(51, 28, 0, 1)",
    "-1": "rgba(25, 14, 0, 1)",
  },
  custom2: {
    DEFAULT: "#202355",
    1: "rgba(35, 39, 94, 1)",
    2: "rgba(38, 42, 102, 1)",

    3: "rgba(42, 46, 111, 1)",

    4: "rgba(45, 49, 119, 1)",

    5: "rgba(48, 53, 128, 1)",

    6: "rgba(51, 56, 136, 1)",

    7: "rgba(54, 60, 145, 1)",

    8: "rgba(58, 63, 153, 1)",

    9: "rgba(61, 67, 162, 1)",

    10: "rgba(64, 70, 170, 1)",

    "-9": "rgba(29, 32, 77, 1)",

    "-8": "rgba(26, 28, 68, 1)",

    "-7": "rgba(22, 25, 59, 1)",

    "-6": "rgba(19, 21, 51, 1)",

    "-5": "rgba(16, 18, 43, 1)",

    "-4": "rgba(13, 14, 34, 1)",

    "-3": "rgba(10, 10, 25, 1)",

    "-2": "rgba(6, 7, 17, 1)",

    "-1": "rgba(3, 3, 8, 1)",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  // purge: ["./src/**/*.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      minWidth: {
        screen: "100vw",
      },
      // colors: { ...colors_default },
    },
  },
  themes: {},
  darkMode: "class",
  important: true,
  plugins: [
    nextui({
      themes: {
        light: {
          extend: "default",
          colors: { ...colors_default },
        },
        dark: {
          extend: "default",
          colors: { ...colors_default },
        },
        navidad: {
          // extend: "light",
          colors: {
            custom1: {
              DEFAULT: "#17c964",
              1: "rgba(25, 221, 110, 1)",
              2: "rgba(28, 241, 120, 1)",
              3: "rgba(30, 255, 130, 1)",
              4: "rgba(32, 255, 140, 1)",
              5: "rgba(35, 255, 150, 1)",
              6: "rgba(37, 255, 160, 1)",
              7: "rgba(39, 255, 170, 1)",
              8: "rgba(41, 255, 180, 1)",
              9: "rgba(44, 255, 190, 1)",
              10: "rgba(46, 255, 200, 1)",
              "-9": "rgba(21, 181, 90, 1)",
              "-8": "rgba(18, 161, 80, 1)",
              "-7": "rgba(16, 141, 70, 1)",
              "-6": "rgba(14, 121, 60, 1)",
              "-5": "rgba(12, 101, 50, 1)",
              "-4": "rgba(9, 80, 40, 1)",
              "-3": "rgba(7, 60, 30, 1)",
              "-2": "rgba(5, 40, 20, 1)",
              "-1": "rgba(2, 20, 10, 1)",
            },
            custom2: {
              DEFAULT: "#dd1729",
              1: "rgba(243, 25, 45, 1)",
              2: "rgba(255, 28, 49, 1)",
              3: "rgba(255, 30, 53, 1)",
              4: "rgba(255, 32, 57, 1)",
              5: "rgba(255, 35, 62, 1)",
              6: "rgba(255, 37, 66, 1)",
              7: "rgba(255, 39, 70, 1)",
              8: "rgba(255, 41, 74, 1)",
              9: "rgba(255, 44, 78, 1)",
              10: "rgba(255, 46, 82, 1)",
              "-9": "rgba(199, 21, 37, 1)",
              "-8": "rgba(177, 18, 33, 1)",
              "-7": "rgba(155, 16, 29, 1)",
              "-6": "rgba(133, 14, 25, 1)",
              "-5": "rgba(111, 12, 21, 1)",
              "-4": "rgba(88, 9, 16, 1)",
              "-3": "rgba(66, 7, 12, 1)",
              "-2": "rgba(44, 5, 8, 1)",
              "-1": "rgba(22, 2, 4, 1)",
            },
          },
        },
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
