import { OrderToSupplierContextProvider } from './context/supplier-order.context'
import { SupplierOrderComp } from './supplier-order.component'

interface Props {
  children?: React.ReactNode
  orderId: `${string}_${string}`
}

export const SupplierOrderContainer: React.FC<Props> = ({
  children,
  orderId,
}: Props) => {
  return (
    <>
      <h2>Order to Supplier</h2>
      <OrderToSupplierContextProvider>
        <SupplierOrderComp orderId={orderId} />
        {children}
      </OrderToSupplierContextProvider>
    </>
  )
}
