import React, {useEffect, useState} from 'react';
import Screen from '../../../components/ui/Screen';
import FilledAppBar from '../../../components/ui/AppBar/Filled';
import strings from '../../../localization';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useMyTheme} from '../../../themes';
import {IconButton} from '../../../components/Buttons';
import OrderTabs from './OrderTabs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types';
import Order from '../../../models/Order';
import {ordersDemo} from '../../../demos';
import {ActivityIndicator, View} from 'react-native';
import NoOrders from '../../../components/OrdersList/NoOrders';

const OrdersScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useMyTheme();

  const [orders, setOrders] = useState<Array<Order>>();

  useEffect(() => {
    setTimeout(() => {
      setOrders(ordersDemo);
    }, 1000);
  }, []);

  return (
    <Screen>
      {orders === undefined ? (
        <View style={{padding: 16}}>
          <ActivityIndicator color={theme.colors.icon.light} />
        </View>
      ) : orders.length === 0 ? (
        <NoOrders />
      ) : (
        <>
          <FilledAppBar
            title={strings.orders}
            trailing={
              <IconButton
                onPress={() => {
                  navigation.navigate('OrderHistory', {
                    orders: orders.filter(
                      order =>
                        !['delivering', 'preparing'].includes(order.status),
                    ),
                  });
                }}>
                <MaterialIcons
                  name="history"
                  size={24}
                  color={theme.colors.icon.dark}
                />
              </IconButton>
            }
            onMenu={() => {}}
            onClose={() => {}}
          />
          <OrderTabs
            orders={orders.filter(order =>
              ['delivering', 'preparing'].includes(order.status),
            )}
          />
        </>
      )}
    </Screen>
  );
};

export default OrdersScreen;
