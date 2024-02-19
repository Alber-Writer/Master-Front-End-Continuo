import { useEffect } from 'react'
import { OrderHeader } from './components/order-header'
import { useSupplierOrder } from './hooks/use-supplier-order.hook'
import { getOrder } from './order-repository'
import { OrderDetails } from './components/order-details'

interface Props {
  children?: React.ReactNode
  orderId: string
}

export const SupplierOrderComp: React.FC<Props> = ({
  children,
  orderId,
}: Props) => {
  const { basicInfo, details, updateDetails, updateInfo } = useSupplierOrder()

  useEffect(() => {
    getOrder(orderId).then((newOrder) => {
      if (newOrder) {
        const { details, ...rest } = newOrder
        updateInfo({ ...rest })
        updateDetails([...details])
      }
    })
  }, [])

  return (
    <>
      <div className="flex-rows">
        <h3>Order info:</h3>
        {children}
        <div>
          {!basicInfo || !details || basicInfo.providerName === 'empty' ? (
            'Order not found'
          ) : (
            <>
              <OrderHeader></OrderHeader>
              <OrderDetails></OrderDetails>
            </>
          )}
        </div>
        {children}
      </div>
    </>
  )
}
