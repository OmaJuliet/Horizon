/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#b6ef11",
        white: "#fff",
        gray: {
          "100": "#1b1b1b",
          "200": "#1a1a1a",
          "300": "#181816",
        },
        primary: "#3862f8",
        "gray-100": "#0d0d0c",
        springgreen: "#00ea5e",
        silver: "#c9c9c9",
        lightsteelblue: "#b2b7c7",
      },
      fontFamily: {
        "gilroy-medium": "Gilroy-Medium",
        button: "Poppins",
        inter: "Inter",
        "headline-5": "Gilroy-Bold",
      },
      borderRadius: {
        "11xl": "30px",
        "341xl": "360px",
        "71xl": "90px",
        "81xl": "100px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "5xl": "24px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
