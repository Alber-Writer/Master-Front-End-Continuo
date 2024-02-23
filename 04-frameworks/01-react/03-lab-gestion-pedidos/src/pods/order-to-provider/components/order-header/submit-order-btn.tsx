import { useSupplierOrder } from '../../hooks/use-supplier-order.hook'
import { IBasicInfo } from '../../view-model/order.vm.model'

export const SubmitOrderBtn = ({
  isReadyToSend,
  basicInfo,
}: {
  isReadyToSend: boolean
  basicInfo: IBasicInfo
}) => {
  const {submitOrder} = useSupplierOrder()

  const SUBMIT_BTN_TEXTS_TYPES = {
    SUBMIT: 'Submit order',
    ALREADY_SUBMITTED: 'Order already submitted',
    DISABLED: '...order in progress',
  }
  const submitButtonTexts = () => {
    if (basicInfo.isSentToProvider)
      return SUBMIT_BTN_TEXTS_TYPES.ALREADY_SUBMITTED
    if (!basicInfo.isSentToProvider && isReadyToSend)
      return SUBMIT_BTN_TEXTS_TYPES.SUBMIT
    return SUBMIT_BTN_TEXTS_TYPES.DISABLED
  }
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    submitOrder()
  }

  return (
    <button
      className={isReadyToSend ? 'validation' : ''}
      disabled={!isReadyToSend || basicInfo.isSentToProvider}
      style={{ alignSelf: 'flex-end' }}
      onClick={handleSubmit}
    >
      {submitButtonTexts()}
    </button>
  )
}
