import { AMDetails, AMOrder } from '../api/order.AM.model'
import { getOrder as getOrderAM } from '../api/get-order.api'
import { IDetailTask, IOrder } from './order.vm.model'

const mapApiModelToDetailsTaskVM = (details: AMDetails): IDetailTask => ({
  detailId: details.detailId,
  detailDescription: details.detailDescription,
  price: details.price,
  isCompleted: details.isCompleted,
})

export const mapApiModelToDetailsTaskListVM = (
  taskList: AMDetails[],
): IDetailTask[] => taskList.map(mapApiModelToDetailsTaskVM)

export const mapApiModelToOrderVM = (order: AMOrder | null): IOrder | null => {
  if (order)
    return {
      orderId: order.orderId,
      providerName: order.providerName,
      date: order.date,
      isSentToProvider: order.isSentToProvider,
      details: mapApiModelToDetailsTaskListVM(order.details),
    }
  return null
}
