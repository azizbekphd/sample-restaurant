import React from "react";
import { View } from "react-native";
import { Label } from "."

const SectionTitle = ({children}: {children: string})=>{
    return <View style={{marginBottom: 2, marginTop: 10}}>
        <Label.Large>{children}</Label.Large>
    </View>
}

export default SectionTitle;