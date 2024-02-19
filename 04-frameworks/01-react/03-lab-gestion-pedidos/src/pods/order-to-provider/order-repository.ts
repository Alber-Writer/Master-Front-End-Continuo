import { getOrder as getApiOrder } from './api/get-order.api'
import { mapApiModelToOrderVM } from './order-mapper'
import { IOrder } from './order.vm.model'

export const getOrder = async (id: string):Promise<IOrder | null> => {
  return await getApiOrder(id)?.then(mapApiModelToOrderVM) ?? null
}
