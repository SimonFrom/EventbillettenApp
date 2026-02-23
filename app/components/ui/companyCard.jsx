import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {Card, Text} from 'react-native-paper';
import BtnComp from "@/components/ui/button";


const CompanyCardComp = ({sellerName, subTitle, body}) => (
    <Card style={styles.Card}>
        <Card.Title title={sellerName} subTitle={subTitle}/>
        <Card.Cover style={styles.CardImg} source={{uri: 'https://picsum.photos/700'}}/>
        <Card.Content>
            {/*<Text variant="titleLarge">Card title</Text>*/}
            <Text variant="bodyMedium">{body}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
            <BtnComp
                mode={'contained'}
                title={"Go to seller"}
                onPress={() => alert("OK!")}>
            </BtnComp>
            <BtnComp

                title={"Deactivate"}
                onPress={() => alert("Cancel!")}>
            </BtnComp>
        </Card.Actions>
    </Card>

);

const styles = StyleSheet.create({
    Card: {
        flex: 1,
        width: '80%',
        height: 420,
        backgroundColor: 'grey',
    },
    CardImg: {
        padding: '5%',
        backgroundColor: 'grey',

    },
    actions: {
        flexDirection: "row",
        gap: 12,
        justifyContent: 'center'// 👈 plads imellem knapper
    },
    actionBtn: {
        flex: 1,
    }

})


export default CompanyCardComp;