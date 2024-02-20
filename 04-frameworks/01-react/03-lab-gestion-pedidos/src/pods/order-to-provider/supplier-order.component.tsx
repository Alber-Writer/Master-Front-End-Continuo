import { useEffect } from 'react'
import { OrderHeader, OrderDetails } from './components/'
import { useSupplierOrder } from './hooks/use-supplier-order.hook'
interface Props {
  children?: React.ReactNode
  orderId: string
}

export const SupplierOrderComp: React.FC<Props> = ({
  children,
  orderId,
}: Props) => {
  const { basicInfo, details, loadOrder } = useSupplierOrder()

  useEffect(() => {
    loadOrder(orderId)
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
