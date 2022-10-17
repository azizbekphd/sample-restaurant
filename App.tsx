import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  MyDefaultTheme
} from "./src/themes"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from './src/screens/Home';
import StoresScreen from './src/screens/Stores';
import { useColorScheme } from 'react-native';
import MyDarkTheme from './src/themes/MyDarkTheme';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />
          ),
        }}
        component={HomeScreen} />
      <Tab.Screen
        name="Stores"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="storefront-outline" size={size} color={color}/>
          )
        }}
        component={StoresScreen} />
      <Tab.Screen name="Order"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="sticker-text-outline" size={size} color={color}/>
          )
        }}
        component={HomeScreen} />
      <Tab.Screen name="Profile"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>
          )
        }}
        component={HomeScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const scheme = useColorScheme();
  
  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;