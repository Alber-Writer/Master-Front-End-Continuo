import { useEffect, useState } from 'react'
import { getOrder } from './api/get-order.api'
import { Order } from './api/get-order.AM.model'
import { OrderDetails } from './components/OrderDetails'
import { OrderHeader } from './components/order-header'

interface Props {
  children?: React.ReactNode
}

export const OrderToProvider: React.FC<Props> = ({ children }: Props) => {
  const [order, setOrder] = useState<Order | null>(null)
  useEffect(() => {
    setOrder(getOrder('240201_11'))
  }, [])
  // const {} = useOrderToProvider()
  return (
    <>
      <h1>Order to provider</h1> {children}
      <div>
        {!order ? (
          'Order not found'
        ) : (
          <>
            <OrderHeader order={order}></OrderHeader>
            <OrderDetails details={order.details}></OrderDetails>
          </>
        )}
      </div>
    </>
  )
}
