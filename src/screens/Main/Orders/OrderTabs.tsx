import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrdersTabStackParamsList from './types';
import strings from '../../../localization';
import MyTopTabBar from '../../../components/ui/MyTopTabBar';
import OrdersList from './OrdersList';
import {Order} from '../../../models';
import StorePickup from './StorePickup';
import Delivery from './Delivery';

const Tab = createMaterialTopTabNavigator<OrdersTabStackParamsList>();

const OrderTabs = ({orders}: {orders: Order[]}) => {
  return (
    <Tab.Navigator tabBar={MyTopTabBar}>
      <Tab.Screen
        name="StorePickup"
        component={StorePickup}
        initialParams={{
          orders: orders.filter(order => order.type === 'store_pickup'),
        }}
        options={{title: strings.store_pickup}}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        initialParams={{
          orders: orders.filter(order => order.type === 'delivery'),
        }}
        options={{title: strings.delivery}}
      />
    </Tab.Navigator>
  );
};

export default OrderTabs;
