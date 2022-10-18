import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ColorValue, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../localization';
import {Order} from '../../models';
import {RootStackParamList} from '../../screens';
import {useMyTheme} from '../../themes';
import Card from '../ui/Card';
import ListDivider from '../ui/ListDivider';
import ListTile from '../ui/ListTile';
import {BodyText, Label, Subtitle} from '../ui/Text';

const OrderStatusView = ({order}: {order: Order}) => {
  const {colors} = useMyTheme();

  const getBackgroundColor = () => {
    const values = {
      preparing: colors.icon.orangeLight,
      received: colors.icon.orangeLight,
      delivering: colors.icon.blueLight,
      delivered: colors.icon.greenLight,
      failed: colors.icon.redLight,
    };
    return values[order.status];
  };

  const getForegroundColor = () => {
    const values = {
      preparing: colors.icon.orange,
      received: colors.icon.orange,
      delivering: colors.icon.blue,
      delivered: colors.icon.green,
      failed: colors.icon.red,
    };
    return values[order.status];
  };

  const getText = () => {
    const values = {
      preparing: strings.preparing,
      received: strings.received,
      delivering: strings.delivering,
      delivered: strings.delivered,
      failed: strings.failed,
    };
    return values[order.status];
  };

  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: getBackgroundColor(),
      }}>
      <BodyText color={getForegroundColor()}>{getText()}</BodyText>
    </View>
  );
};

const OrdersListItem = ({order}: {order: Order}) => {
  const theme = useMyTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('OrderDetails', {
          order: order,
        })
      }>
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <OrderStatusView order={order} />
          <Subtitle>{order.orderedAt}</Subtitle>
        </View>
        <View style={{paddingVertical: 8}}>
          <ListTile
            onPress={() => {
              navigation.navigate('StoreDetails', {store: order.from});
            }}
            leading={
              <MaterialCommunityIcons
                name="storefront"
                size={20}
                color={theme.colors.icon.blue}
              />
            }>
            <BodyText>{order.from.address}</BodyText>
          </ListTile>
          <ListDivider />
          {order.receivedAt === undefined ? (
            <ListTile
              leading={
                <MaterialIcons
                  name="location-on"
                  size={20}
                  color={theme.colors.icon.green}
                />
              }>
              <BodyText>{order.to}</BodyText>
            </ListTile>
          ) : (
            <ListTile
              leading={
                <MaterialCommunityIcons
                  name="clock-time-three"
                  size={20}
                  color={theme.colors.icon.orange}
                />
              }>
              <BodyText>{order.receivedAt}</BodyText>
            </ListTile>
          )}
        </View>
        <View style={{paddingHorizontal: 16, flexDirection: 'row'}}>
          <BodyText style={{flex: 1, marginRight: 8}}>
            {order.receipt.map(i => `${i.product.name} (x${i.psc})`).join(', ')}
          </BodyText>
          <Label.Medium>{order.payment.total}</Label.Medium>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrdersListItem;
