import { useEffect, useState } from 'react'
import { IDetailTask } from '../order.vm.model'
import { useSupplierOrder } from '../hooks/use-supplier-order.hook'
import { HeaderStaticInfo } from './header-fixed-info'
import { SubmitOrderBtn } from './submit-order-btn'

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

  const progressToPercentage = (details: IDetailTask[]): number => {
    const completed = details.filter((detail) => detail.isCompleted)
    return Number(((completed.length * 100) / details.length).toFixed(2))
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
          <SubmitOrderBtn isReadyToSend={isReadyToSend} basicInfo={basicInfo} />
        </div>

        {basicInfo.isSentToProvider}
      </div>
      {children && children}
    </>
  )
}

