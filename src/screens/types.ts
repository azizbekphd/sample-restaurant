import { Store } from "../models";
import Order from "../models/Order";

type RootStackParamList = {
    Main: undefined,
    StoreDetails: {
        store: Store,
    },
    OrderHistory: {
        orders: Array<Order>,
    },
    OrderDetails: {
        order: Order,
    }
}

export default RootStackParamList;