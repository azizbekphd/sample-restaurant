import { Theme } from "@react-navigation/native";

type MyTheme = Theme & {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
        appbar_menu: string,
        icon: {
            light: string,
            semidark: string,
            dark: string,
        }
    }
}

export default MyTheme;