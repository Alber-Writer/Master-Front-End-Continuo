import { useSupplierOrder } from '../hooks/use-supplier-order.hook'
import { IDetailTask } from '../api/order.AM.model'
import { DetailsForm } from './details-form'

interface OrderDetailsProps {
  children?: React.ReactNode
}

export const OrderDetails: React.FC<OrderDetailsProps> = (
  props: OrderDetailsProps,
) => {
  const { details, updateDetails } = useSupplierOrder()

  const handleSubmit =
    (newsList: IDetailTask[]) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateDetails(newsList)
    }
  return (
    <>
      <DetailsForm initialList={details} handleSubmit={handleSubmit} />
      {props.children}
    </>
  )
}
