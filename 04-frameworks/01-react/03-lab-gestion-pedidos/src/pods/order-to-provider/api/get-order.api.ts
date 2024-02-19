import { AMOrder } from './order.AM.model'
import {orders} from '@/mock-data/orders.json'

export const getOrder = async (id: string): Promise<AMOrder | null> => {
  return orders.find((item) => id === item.orderId) || null
}