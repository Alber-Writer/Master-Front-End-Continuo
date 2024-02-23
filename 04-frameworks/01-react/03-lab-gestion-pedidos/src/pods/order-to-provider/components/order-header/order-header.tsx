import { useSupplierOrder } from '../../hooks/use-supplier-order.hook'
import { HeaderStaticInfo } from './header-fixed-info'
import { SubmitOrderBtn } from './submit-order-btn'

interface Props {
  children?: React.ReactNode
}

export const OrderHeader: React.FC<Props> = ({ children }: Props) => {
  const { basicInfo, totalPrice, percentageProgress, isReadyToSend } = useSupplierOrder()

  return (
    <>
      <div className="flex-rows box">
        <HeaderStaticInfo info={basicInfo} />
        <div className="flex-rows fwidth">
          <label>
            Total price:{' '}
            <input type="string" value={`${totalPrice} €`} readOnly />
          </label>
          <label>
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

