import {DarkTheme} from '@react-navigation/native';
import MyTheme from './MyTheme';

const MyDarkTheme: MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    reverse: "#000000",
    overlay: "rgba(255, 255, 255, 0.4)",
    appbar:{
      menu: "rgba(255, 255, 255, 0.05)",
      back: "rgba(255, 255, 255, 0.1)",
    },
    icon: {
      light: '#C4C4CF',
      semidark: '#808089',
      dark: '#27272A',
      green: "#00AB56",
      blue: "#1A94FF",
      orange: "#FC820A",
      red: "#FF424E",
      greenLight: "#EFFFF4",
      blueLight: "#F0F8FF",
      orangeLight: "#FFF5EB",
      redLight: "#FFF0F1",
    },
  },
};

export default MyDarkTheme;
