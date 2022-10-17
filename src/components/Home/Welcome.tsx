import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import strings from '../../localization';
import { Label } from '../ui/Text';

const WelcomeTitle = ()=>{
    return <View style={styles.wrapper}>
        <Image style={styles.logo} source={require("../../assets/img/app_icon.png")}/>
        <View style={styles.captions}>
            <Label.Small>
                {strings.welcome_to}
            </Label.Small>
            <Label.Medium>
                {strings.app_name}
            </Label.Medium>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    captions: {
        flexDirection: "column",
        paddingHorizontal: 12,
    }
})

export default WelcomeTitle;