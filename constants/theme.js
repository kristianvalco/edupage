export const COLORS = {
  primary: "#273444",
  secondary: "#939DA9",
  highlight: "#E31D1D",

  white: "#FFF",
};

export const SIZES = {
  extraSmall: 8,
  base: 12,
  small: 14,
  font: 16,
  medium: 18,
  large: 20,
  extraLarge: 24,
};

export const FONTS = {
  bold: "SourceSansPro-Bold",
  semiBold: "SourceSansPro-SemiBold",
  regular: "SourceSansPro-Regular",
  light: "SourceSansPro-Light",
  black: "SourceSansPro-Black",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
