import { Payment, Product, Store } from "."
import ReceiptItem from "./ReceiptItem"

type OrderType = "store_pickup" | "delivery"
type OrderStatus = "preparing" | "received" | "delivered" | "delivering" | "failed"

class Order {
    id!: string
    type!: OrderType
    status!: OrderStatus
    from!: Store
    to!: string
    receipt!: ReceiptItem[]
    payment!: Payment
    orderedAt!: string
    receivedAt?: string
}

export default Order;