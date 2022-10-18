import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OrdersList from "./OrdersList";
import OrdersTabStackParamsList from "./types";

type DeliveryOrdersProps = NativeStackScreenProps<
  OrdersTabStackParamsList,
  'Delivery'
>;

const StorePickupOrders = ({route}: DeliveryOrdersProps)=>{
    return <OrdersList orders={route.params.orders}/>
}

export default StorePickupOrders;