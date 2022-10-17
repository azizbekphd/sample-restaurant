import {DarkTheme} from '@react-navigation/native';
import MyTheme from './MyTheme';

const MyDarkTheme: MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    appbar_menu: "rgba(0, 0, 0, 0.05)",
    icon: {
      light: '#C4C4CF',
      semidark: '#808089',
      dark: '#27272A',
    },
  },
};

export default MyDarkTheme;
