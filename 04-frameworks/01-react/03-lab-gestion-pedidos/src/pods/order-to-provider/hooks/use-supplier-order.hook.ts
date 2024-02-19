import { useContext, useEffect } from 'react'
import { orderToSupplierContext } from '../context/order-to-supplier.context'
import { IDetailTask, IBasicInfo } from '../order.vm.model'

export const useSupplierOrder = () => {
  const {
    basicInfo,
    setBasicInfo,
    details,
    setDetails,
    totalPrice,
    setTotalPrice,
  } = useContext(orderToSupplierContext)

  useEffect(() => {
    const priceValue = calculateTotalPrice(details)
      ? calculateTotalPrice(details)
      : 0
    setTotalPrice(priceValue)
  }, [details])

  const calculateTotalPrice = (detailsList: IDetailTask[]) => {
    return detailsList
      .filter((detail) => detail.isCompleted)
      .reduce((acc: number, current) => {
        return +((acc + +current.price).toFixed(2))
      }, Number(0))
  }

  const updateDetails = (newDetails: IDetailTask[]) => {
    setDetails([...newDetails])
  }

  const updateInfo = (newInfo: IBasicInfo) => {
    setBasicInfo({ ...basicInfo, ...newInfo })
  }

  return {
    basicInfo,
    details,
    totalPrice,
    updateDetails,
    updateInfo,
  }
}
