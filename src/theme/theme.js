import colors from "./colors";
import spacing from "./spacing";

const theme = {
  font: 'Inter, sans-serif',
  colors,
  spacing,
}

export const lightTheme = {
  ...theme,
  palette: {
    background: {
      primary: colors.LIGHT_GRAY,
      secondary: colors.DARK_GRAY,
    },
    text: {
      primary: colors.BLACK,
      secondary: colors.WHITE,
    },
    button: {
      primary: colors.MEDIUM_GRAY,
    }
  }
}

export const darkTheme = {
  ...theme,
  palette: {
    background: {
      primary: colors.DARK_GRAY,
      secondary: colors.BLACK,
    },
    text: {
      primary: colors.WHITE,
      secondary: colors.WHITE,
    },
    button: {
      primary: colors.MEDIUM_GRAY,
    }
  }
}

export const coloredTheme = {
  ...theme,
  palette: {
    background: {
      primary: colors.LIGHT_GRAY,
      secondary: colors.AQUAMARINE,
    },
    text: {
      primary: colors.CORAL_LIGHT,
      secondary: colors.WHITE,
    },
    button: {
      primary: colors.CORAL_LIGHT,
    }
  }
}
