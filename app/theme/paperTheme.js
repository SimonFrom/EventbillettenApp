import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { Colors } from "@/constants/theme";

export const LightPaperTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,

        primary: '#48008b',
        onPrimary: "#ffffff",

        background: Colors.light.background,
        surface: Colors.light.background,
        onSurface: Colors.light.text,

        outline: Colors.light.icon,
    },
};

export const DarkPaperTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,

        primary: '#48008b',
        onPrimary: "#ffffff",

        background: Colors.dark.background,
        surface: Colors.dark.background,
        onSurface: Colors.dark.text,

        outline: Colors.dark.icon,
    },
};