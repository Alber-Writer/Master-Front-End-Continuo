import { useContext, useEffect, useState } from 'react'
import { supplierOrderContext } from '../context/supplier-order.context'
import { IDetailTask, IBasicInfo } from '../view-model/order.vm.model'
import { getSupplierOrder } from '../supplier-order-repository'

export const useSupplierOrder = () => {
  const {
    basicInfo,
    setBasicInfo,
    details,
    setDetails,
    totalPrice,
    setTotalPrice,
  } = useContext(supplierOrderContext)

  /* States for "calculated" fields: */
  const [isReadyToSend, setIsReadyToSend] = useState(false)
  const [percentageProgress, setPercentageProgress] = useState(0)

  useEffect(() => {
    const priceValue = calculateTotalPrice(details)
      ? calculateTotalPrice(details)
      : 0

    setTotalPrice(priceValue)
    setPercentageProgress(progressToPercentage(details))
    setIsReadyToSend(percentageProgress >= 100)
  }, [details, percentageProgress])

  const calculateTotalPrice = (detailsList: IDetailTask[]) => {
    return detailsList
      .filter((detail) => detail.isCompleted)
      .reduce((acc: number, current) => {
        return +(acc + +current.price).toFixed(2)
      }, Number(0))
  }

  const loadOrder = (orderId: string) => {
    getSupplierOrder(orderId).then((newOrder) => {
      if (newOrder) {
        const { details, ...rest } = newOrder
        updateInfo({ ...rest })
        updateDetails([...details])
      }
    })
  }

  const updateDetails = (newDetails: IDetailTask[]) => {
    setDetails([...newDetails])
  }

  const updateInfo = (newInfo: IBasicInfo) => {
    setBasicInfo({ ...basicInfo, ...newInfo })
  }

  const progressToPercentage = (details: IDetailTask[]): number => {
    const completed = details.filter((detail) => detail.isCompleted)
    return Number(((completed.length * 100) / details.length).toFixed(2))
  }

  const handleSubmitDetails =
    (newsList: IDetailTask[]) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateDetails(newsList)
    }

  return {
    basicInfo,
    details,
    totalPrice,
    isReadyToSend,
    percentageProgress,
    handleSubmitDetails,
    loadOrder,
  }
}
