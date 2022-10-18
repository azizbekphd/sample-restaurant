import React from "react";
import { View } from "react-native";
import { useMyTheme } from "../../themes";
import globalStyle from "./globalStyles";

const Card = (props: {children: React.ReactNode}) => {
    const theme = useMyTheme()

    return <View style={[
        globalStyle.card,
        {
            backgroundColor: theme.colors.card,
            paddingVertical: 16,
            paddingHorizontal: 0,
        }
    ]} {...props}/>
}

export default Card;