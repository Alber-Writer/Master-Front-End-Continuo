import { IOrder } from './order.AM.model'
import {orders} from '@/mock-data/orders.json'

export const getOrder = (id: `${string}_${string}`): IOrder | null => {
  return orders.find((item) => id === item.orderId) || null
}