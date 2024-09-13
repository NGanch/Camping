/** @type {import('tailwindcss').Config} */
// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
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
        secondaryWhite: "#F7F7F7",
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
