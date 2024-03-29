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
        100: "100px",
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
      tableHeader: "#DDEBFF",
      bgGold: "#DCC063",
      silverBg: "#CBCBCB",
      moneyBg: "#D2EBFA",
      goldText: "#866D1B",
      silverText: "#5B5B5B",
      breadCrumbs: "#1FB9FC",
      modelBg: "#E5EDF0",
      tachometerBg: "#FFD9C3",
      kycPending: "#FC5A5A",
      kycPendingBg: "#FFE0E0",
      ticketBg: "#D9FFE3",
      startChatBg: "#FFDDE9",
      startChatText: "#FF629A",
      divider: "#E5E5E5",
      darkBlue: "#0153C9",
      idColor: "#797979",
      lossColor: "#16AA09",
      success: "#50CF30",
      successBg: "#BDFDAC",
      silverChipBg: "#F0F0F0",
      priceBg: "#0153C91A",
      btnGreen: "#808080",
      carbonBgBlue: "#E5F7FF",
      mailBg: "#E4F7FF",
      removePersonBg: "#E6E6E6",
      editPersonBg: "#F0FFB8",
      disable: "rgba(0, 0, 0, 0.50)",
      chartLabel: "#86909C",
      redChip: "#F55",
      paginationBtn: "#DFE3E8",
      darkGrey: "#212B36",
      paginationArrow: "#C4CDD5",
      done: "#27A607",
    },
    fontFamily: {
      customFont: ["inter"],
      sideBarFont: ["Lato"],
    },
    fontSize: {
      "custom-sm": "12px",
      "custom-md": "14px",
      "custom-lg": "18px",
      "custom-xl": "22px",
    },
  },
  plugins: [],
};
