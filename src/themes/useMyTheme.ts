import { useTheme } from "@react-navigation/native";
import MyTheme from "./MyTheme";

function useMyTheme (): MyTheme {
    return useTheme() as MyTheme;
}

export default useMyTheme;