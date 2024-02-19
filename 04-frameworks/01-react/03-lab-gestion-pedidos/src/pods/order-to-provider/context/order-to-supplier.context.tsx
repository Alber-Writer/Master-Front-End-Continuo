/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react'
import {
  IBasicInfo,
  IDetailTask,
  IOrder,
} from '../order.vm.model'

interface OrderToSupplierContext {

  basicInfo: IBasicInfo
  setBasicInfo: (info: IBasicInfo) => void

  details: IDetailTask[]
  setDetails: (details: IDetailTask[]) => void

  totalPrice: number
  setTotalPrice: (price: number) => void
}

const createEmptyOrder = (): IOrder => ({
  orderId: '000000_00',
  providerName: '',
  date: '',
  isSentToProvider: false,
  details: [
    {
      detailId: '0',
      detailDescription: 'empty',
      price: 0,
      isCompleted: false,
    },
  ],
})

const emptyOrder = createEmptyOrder();
const { date, isSentToProvider, orderId, providerName, details:detailsList } = emptyOrder

export const orderToSupplierContext = createContext<OrderToSupplierContext>({
  basicInfo: { date, isSentToProvider, orderId, providerName },
  setBasicInfo: (_info) => console.log('Provider must be applied'),

  details: detailsList,
  setDetails: (_detailsList) => console.log('Provider must be applied'),
  totalPrice: 0,
  setTotalPrice: (_price) => {
    console.log('Provider must be applied')
  },
})

interface Props {
  children?: React.ReactNode
}
export const OrderToSupplierContextProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [basicInfo, setBasicInfo] = useState({date, isSentToProvider, orderId, providerName})
  const [details, setDetails] = useState(detailsList)
  const context = orderToSupplierContext
  return (
    <context.Provider
      value={{
        totalPrice,
        setTotalPrice,
        basicInfo,
        setBasicInfo,
        details,
        setDetails,
      }}
    >
      {children}
    </context.Provider>
  )
}
