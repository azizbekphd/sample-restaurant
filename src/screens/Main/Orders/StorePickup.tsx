import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OrdersList from "./OrdersList";
import OrdersTabStackParamsList from "./types";

type StorePickupOrdersProps = NativeStackScreenProps<
  OrdersTabStackParamsList,
  'StorePickup'
>;

const StorePickupOrders = ({route}: StorePickupOrdersProps)=>{
    return <OrdersList orders={route.params.orders}/>
}

export default StorePickupOrders;