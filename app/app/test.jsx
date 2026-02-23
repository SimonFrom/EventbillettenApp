import { Text, View } from "react-native";
import * as React from "react";
import BtnComp from "@/components/ui/button";
import NavTab from "@/components/ui/navTab";
import CardComp from "@/components/ui/card";

export default function Test() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <CardComp
                title={"Hello there"}
                body={"This is a card body"}
            >
            </CardComp>
            <Text>This is the test page</Text>
        </View>
    );
}
