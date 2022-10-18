import {FlatList} from 'react-native';
import NoOrders from '../../../components/OrdersList/NoOrders';
import Screen from '../../../components/ui/Screen';
import OrdersListItem from '../../../components/OrdersList/OrdersListItem';
import { Order } from '../../../models';

const OrdersList = ({orders}: {orders: Order[]}) => {
  return (
    <Screen>
      {orders.length === 0 ? (
        <NoOrders />
      ) : (
        <FlatList
          data={orders}
          renderItem={({item}) => <OrdersListItem order={item} />}
          style={{
            marginVertical: 10,
          }}
        />
      )}
    </Screen>
  );
};

export default OrdersList;
