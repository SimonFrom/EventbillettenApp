import { Text, View } from "react-native";
import * as React from "react";
import CardComp from "@/components/ui/companyCard";
import SearchComp from "@/components/ui/searchBar";

export default function Test() {
    return (
        <View
            style={{
                paddingTop: "5%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SearchComp></SearchComp>
            <CardComp
                sellerName={"OB"}
                subTitle={"Fodbold klub"}
                body={"Stor fodbold klub i Odense"}
            >
            </CardComp>
        </View>
    );
}
