import { useSupplierOrder } from '../../hooks/use-supplier-order.hook'
import { DetailsForm } from './details-form'

interface OrderDetailsProps {
  children?: React.ReactNode
}

export const OrderDetails: React.FC<OrderDetailsProps> = (
  props: OrderDetailsProps,
) => {
  const { details, handleSubmitDetails } = useSupplierOrder()
  return (
    <>
      <DetailsForm initialList={details} handleSubmit={handleSubmitDetails}/>
      {props.children}
    </>
  )
}
