import React from "react"
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native"
import { useMyTheme } from "../../../themes"
import { Label, Subtitle } from "../Text"

type PurchaseMethodProps = {
    image: ImageSourcePropType,
    title: string,
    subtitle: string,
}

const PurchaseMethod = ({image, title, subtitle}: PurchaseMethodProps) => {
    const theme = useMyTheme()

    return <TouchableOpacity style={style.wrapper} activeOpacity={0.8}>
        <Image source={image} style={style.image}/>
        <Label.Large>{title}</Label.Large>
        <Subtitle>{subtitle}</Subtitle>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        marginBottom: 8,
    }
})

export default PurchaseMethod