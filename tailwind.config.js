/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        4: "4px",
        30: "30px",
        15: "15px",
        10: "10px",
      },
      overflow: {
        scrollbarHidden: "scrollbar-hidden",
      },
      gap: {
        13: "52px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      lightBlue: "#F6FAFC",
      logoColor: "#5D5FEF",
      black: "#000",
      buttonBlue: "#4DAEFF",
      gold: "#FC6B21",
      lightGold: "#5ABF41",
      lightBlack: "#313945",
      navGold: "#49E45F",
      paraColor: "#7B7B7E",
      topCard: "#E2E6F7",
      borderColor: "#C6CEF0",
      goldenBg: "#E5FFDF",
      lightBgColor: "#ECEAFE",
      goldBgColor: "#FFEDB2",
      silverText: "#A7A7A7",
    },
    fontFamily: {
      customFont: ["inter"],
      sideBarFont: ["Lato"],
    },
    fontSize: {
      "custom-sm": "12px",
      "custom-md": "14px",
      "custom-lg": "18px",
    },
  },
  plugins: [],
};
