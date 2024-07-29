/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js}"];

export const theme = {
  container: {
    center: true,
  },

  extend: {
    colors: {
      primary: "#3B00D4", // Mor
      secondary: "#43E8FA", // Mavi
    },
  },
  fontFamily: {
    sans: ['"Manrope"', ...defaultTheme.fontFamily.sans], // Manrope fontunu ekledik
  },
  screens: {
    full: "100%", // Ekranın tamamı
    desktop: "1440px", // Büyük ekranlar (1440px ve üzeri)
    tablet: "810px", // Tabletler (810px ile 1439px arasında)
    mobile: "809px", // Mobil cihazlar (809px ve altı)
  },
};
export const plugins = [];
