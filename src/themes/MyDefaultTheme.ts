import {DefaultTheme} from '@react-navigation/native';
import MyTheme from './MyTheme';

const MyDefaultTheme: MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5F5FA",
    appbar_menu: "rgba(0, 0, 0, 0.05)",
    icon: {
      light: '#C4C4CF',
      semidark: '#808089',
      dark: '#27272A',
    },
  },
};

export default MyDefaultTheme;
