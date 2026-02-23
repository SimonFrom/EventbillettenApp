import * as React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import BtnComp from "@/components/ui/button";



const CardComp = ({title, body}) => (
    <Card>
        <Card.Title title={title}
                    // subtitle="Card Subtitle"
            />
        <Card.Content>
            {/*<Text variant="titleLarge">Card title</Text>*/}
            <Text variant="bodyMedium">{body}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <BtnComp title={"Ok"} onPress={() => alert("OK!")}></BtnComp>
            <BtnComp title={"Cancel"} onPress={() => alert("Cancel!")}></BtnComp>
        </Card.Actions>
    </Card>

);


export default CardComp;