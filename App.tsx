import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyDefaultTheme} from './src/themes';
import {useColorScheme} from 'react-native';
import MyDarkTheme from './src/themes/MyDarkTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Main,
  OrderDetailsScreen,
  OrderHistoryScreen,
  RootStackParamList,
  StoreDetailsScreen,
} from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="StoreDetails" component={StoreDetailsScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
