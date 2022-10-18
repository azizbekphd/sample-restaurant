import Order from "../../../models/Order"

type OrdersTabStackParamsList = {
    StorePickup: {
        orders: Array<Order>,
    },
    Delivery: {
        orders: Array<Order>,
    },
    OrdersList: {
        orders: Array<Order>,
    },
}

export default OrdersTabStackParamsList;