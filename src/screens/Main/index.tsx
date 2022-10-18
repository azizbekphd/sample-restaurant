import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import strings from "../../localization";
import OrdersScreen from "./Orders";
import HomeScreen from "./Home";
import StoresScreen from "./Stores";
import MainTabStackParamList from "./types";
import ProfileScreen from "./Profile";

const Tab = createBottomTabNavigator<MainTabStackParamList>();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 56,
          paddingBottom: 8,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: strings.tab_home,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Stores"
        options={{
          title: strings.stores,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={StoresScreen}
      />
      <Tab.Screen
        name="Orders"
        options={{
          title: strings.tab_order,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="sticker-text-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={OrdersScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: strings.tab_profile,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default Main;