import { Theme } from "@react-navigation/native";

type MyTheme = Theme & {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
        overlay: string;
        reverse: string;
        appbar: {
            menu: string,
            back: string,
        },
        icon: {
            light: string,
            semidark: string,
            dark: string,
            green: string,
            blue: string,
            orange: string,
            red: string,
            greenLight: string,
            blueLight: string,
            orangeLight: string,
            redLight: string,
        }
    }
}

export default MyTheme;