import { Text, View } from "react-native";
import * as React from "react";
import BtnComp from "@/components/ui/button";
import NavTab from "@/components/ui/navTab";
import CardComp from "@/components/ui/companyCard";

export default function Test() {
    return (
        <View
            style={{
                paddingTop: "5%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardComp
                sellerName={"OB"}
                subTitle={"Fodbold klub"}
                body={"Stor fodbold klub i Odense"}
            >
            </CardComp>
        </View>
    );
}
