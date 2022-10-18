import React from 'react';
import Screen from '../components/ui/Screen';
import FilledAppBar from '../components/ui/AppBar/Filled';
import strings from '../localization';
import {useMyTheme} from '../themes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrdersTabStackParamsList from './types';
import StorePickup from './Main/Orders/StorePickup';
import Delivery from './Main/Orders/Delivery';
import OrderTabs from './Main/Orders/OrderTabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from './types';

type OrderHistoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderHistory'
>;

const OrderHistoryScreen = ({navigation, route}: OrderHistoryScreenProps) => {
  return (
    <Screen>
      <FilledAppBar
        title={strings.order_history}
        onMenu={() => {}}
        onClose={() => {}}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <OrderTabs orders={route.params.orders} />
    </Screen>
  );
};

export default OrderHistoryScreen;
