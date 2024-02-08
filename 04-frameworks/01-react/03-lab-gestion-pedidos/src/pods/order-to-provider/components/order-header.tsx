import { useEffect, useState } from 'react'
import { Order, OrderDetails } from '../api/get-order.AM.model'

interface Props {
  order: Order
  children?: React.ReactNode
}

export const OrderHeader: React.FC<Props> = ({ order }: Props) => {
  const [isReadyToSend, setIsReadyToSend] = useState(false)
  const [percentageProgress, setPercentageProgress] = useState(0)

  useEffect(() => {
    setPercentageProgress(()=>progressToPercentage(order.details))
    const checkOrderCompleted = () => {
      if (percentageProgress >= 100) setIsReadyToSend(true)
    }
    checkOrderCompleted()
  }, [percentageProgress, order.details])

  const SUBMIT_BTN_TEXTS_TYPES = {
    SUBMIT: 'Submit order',
    ALREADY_SUBMITTED: 'Order already submitted',
    DISABLED: '...order in progress',
  }

  const progressToPercentage = (details:OrderDetails[]):number=>{
    const accomplished = details.filter((detail)=> detail.detailIsAccomplished)
    return Number( ( (accomplished.length * 100) / details.length ).toFixed(2) )
  }

  const submitButtonTexts = () => {
    if (order.isSentToProvider) return SUBMIT_BTN_TEXTS_TYPES.ALREADY_SUBMITTED
    if (!order.isSentToProvider && isReadyToSend)
      return SUBMIT_BTN_TEXTS_TYPES.SUBMIT
    return SUBMIT_BTN_TEXTS_TYPES.DISABLED
  }

  return (
    <>
      <div className="flex-rows box">
        <div className="flex-rows fwidth">
          <label className="">Order number: <input type='text' value={order.orderId} disabled/></label>
          <label className="">Provider name: <input type='text' value={order.providerName} disabled/></label>
          <label className="">Creation date: <input type='datetime' value={order.date} disabled/></label>
        </div>
        <div className="flex-rows fwidth">
          <label className="">Total price: <input type="text" value={`${'xxx'}`} readOnly/></label>
          <label className="">
            Order processing status: <input type='text' value={`${percentageProgress}%`} readOnly/>
          </label>
          <button
            className={isReadyToSend ? 'validation' : ''}
            disabled={!isReadyToSend || order.isSentToProvider}
          >
            {submitButtonTexts()}
          </button>
        </div>

        {order.isSentToProvider}
      </div>
    </>
  )
}
