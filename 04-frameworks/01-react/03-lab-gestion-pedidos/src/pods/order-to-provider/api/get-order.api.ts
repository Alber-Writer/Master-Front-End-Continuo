import { Order } from './get-order.AM.model'
import {orders} from '@/mock-data/orders.json'

export const getOrder = (id: `${string}_${string}`): Order | null => {
  return orders.find((item) => id === item.orderId) ?? null
}