import { CustomThemeConfig } from "tailwindcss/types/config";
import DefaultTheme from "tailwindcss/defaultTheme"
export const theme: Partial<CustomThemeConfig> = {
  fontFamily: {
    "roboto": ["'Roboto Condensed'", ...DefaultTheme.fontFamily.sans]
  }
}