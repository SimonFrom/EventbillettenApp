import * as React from 'react';
import { Button } from 'react-native-paper';


const MyComponent = () => (
    <Button
        icon="alert-circle"
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}
        buttonColor="white"
        textColor="purple"
    >
        Press me
    </Button>
);

export default MyComponent;