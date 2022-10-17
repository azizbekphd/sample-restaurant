import React from "react";
import { StyleSheet, View } from "react-native";
import strings from "../../localization";
import { useMyTheme } from "../../themes";
import globalStyle from "../ui/globalStyles";
import PurchaseMethod from "./PurchaseMethod";

const PurchaseMethods = () => {
    const theme = useMyTheme()

    return <View style={[
        globalStyle.card,
        style.wrapper,
        {
            backgroundColor: theme.colors.card,
            paddingVertical: 16,
        }
    ]}>
        <PurchaseMethod
            image={require("../../assets/img/store.png")}
            title={strings.store_pickup}
            subtitle={strings.best_quality}
        />
        <View style={[
            style.divider,
            {
                backgroundColor: theme.colors.border,
            }
        ]} />
        <PurchaseMethod
            image={require("../../assets/img/delivery.png")}
            title={strings.delivery}
            subtitle={strings.always_on_time}
        />
    </View>
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    divider: {
        height: 48,
        width: 1,
    }
})

export default PurchaseMethods;