import * as React from 'react';
import { Button } from 'react-native-paper';
import { Colors } from '@/constants/theme';
import {Appearance, StyleSheet} from "react-native";


const colorScheme = Appearance.getColorScheme()
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;


const BtnComp = ({ title, onPress }) => (
    <Button mode="contained"
            onPress={onPress}>
        {title}
    </Button>
);



export default BtnComp;