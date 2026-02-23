import 'react-native-reanimated';
import {PaperProvider} from 'react-native-paper';
import NavTab from "@/components/ui/navTab";
import {Appearance, useColorScheme} from 'react-native';
import {LightPaperTheme, DarkPaperTheme} from "@/theme/paperTheme";

const colorScheme = Appearance.getColorScheme();

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const scheme = useColorScheme();

    return (
        <PaperProvider
            theme={colorScheme === "dark" ? DarkPaperTheme : LightPaperTheme}>
            <NavTab/>

        </PaperProvider>

    );
}
