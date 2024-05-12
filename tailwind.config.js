/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {},
      colors: {
        primaryWhite: "#ffffff",
        primaryBlack: "#101828",
        tritiaryPurpleGray: "#F2F4F7",
        tritiaryGray: "#475467",
        tritiaryLightGray: "#10182833",
        primaryBrightPurple: "#D84343",
        secondaryExoticPink: "#E44848",
        secondaryToxicGreen: "#",
        secondaryCalmOrange: "#",
        tritiaryLavander: "#",
        tritiaryLightestGray: "#1018281A",
        tritiaryLightestExoticPink: "#",
        tritiaryLightestCalmOrange: "#",
        secondaryDarkPurple: "#",
        transparent: "transparent",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      height: {},
      screens: {},
      width: {
        small: "14px",
        normal: "16px",
        large: "",
        xLarge: "",
        h2: "32px",
        p: "12px",
      },
      zIndex: {},

      transitionProperty: {
        "btn-transition": "background-color",
      },
      transitionDuration: {
        "btn-transition": "300ms",
      },
      transitionTimingFunction: {
        "btn-transition": "cubic-bezier(0.46, 0.03, 0.52, 0.96)",
      },
    },
  },
  plugins: [],
};
