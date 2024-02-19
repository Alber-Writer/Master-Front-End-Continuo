import { useEffect, useState } from 'react'
import { IDetailTask } from '../order.vm.model'
import { useSupplierOrder } from '../hooks/use-supplier-order.hook'
import { HeaderStaticInfo } from './header-fixed-info'

interface Props {
  children?: React.ReactNode
}

export const OrderHeader: React.FC<Props> = ({ children }: Props) => {
  const { basicInfo, details, totalPrice } = useSupplierOrder()
  const [isReadyToSend, setIsReadyToSend] = useState(false)
  const [percentageProgress, setPercentageProgress] = useState(0)

  useEffect(() => {
    setPercentageProgress(progressToPercentage(details))
    setIsReadyToSend(percentageProgress >= 100)
  }, [details, percentageProgress])

  const SUBMIT_BTN_TEXTS_TYPES = {
    SUBMIT: 'Submit order',
    ALREADY_SUBMITTED: 'Order already submitted',
    DISABLED: '...order in progress',
  }

  const progressToPercentage = (details: IDetailTask[]): number => {
    const accomplished = details.filter((detail) => detail.isCompleted)
    return Number(((accomplished.length * 100) / details.length).toFixed(2))
  }

  const submitButtonTexts = () => {
    if (basicInfo.isSentToProvider)
      return SUBMIT_BTN_TEXTS_TYPES.ALREADY_SUBMITTED
    if (!basicInfo.isSentToProvider && isReadyToSend)
      return SUBMIT_BTN_TEXTS_TYPES.SUBMIT
    return SUBMIT_BTN_TEXTS_TYPES.DISABLED
  }

  return (
    <>
      <div className="flex-rows box">
        <HeaderStaticInfo info={basicInfo} />
        <div className="flex-rows fwidth">
          <label className="">
            Total price:{' '}
            <input type="string" value={`${totalPrice} €`} readOnly />
          </label>
          <label className="">
            Order processing status:{' '}
            <input type="text" value={`${percentageProgress}%`} readOnly />
          </label>
          <button
            className={isReadyToSend ? 'validation' : ''}
            disabled={!isReadyToSend || basicInfo.isSentToProvider}
          >
            {submitButtonTexts()}
          </button>
        </div>

        {basicInfo.isSentToProvider}
      </div>
      {children && children}
    </>
  )
}
