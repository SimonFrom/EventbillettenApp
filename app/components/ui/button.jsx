import { Button, useTheme } from "react-native-paper";

const BtnComp = ({ title, onPress, style, mode="contained" }) => {
    const { colors } = useTheme();

    return (
        <Button
            mode={mode}
            onPress={onPress}
            style={style}
        >
            {title}
        </Button>
    );
};

export default BtnComp;