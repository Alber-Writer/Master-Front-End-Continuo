import { getOrder as getApiOrder } from './api/get-order.api'
import { mapApiModelToOrderVM } from './view-model/order-mapper'
import { IOrder } from './view-model/order.vm.model'

export const getSupplierOrder = async (id: string):Promise<IOrder | null> => {
  return await getApiOrder(id)?.then(mapApiModelToOrderVM) ?? null
}
