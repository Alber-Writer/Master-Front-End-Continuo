import React from 'react'
import { IBasicInfo } from '../../view-model/order.vm.model'

interface IHeaderStaticInfoProps {
  info: IBasicInfo
}

export const HeaderStaticInfo = React.memo(({
  info,
}: IHeaderStaticInfoProps)=> {
  return (
    <>
      <div className="flex-rows fwidth">
        <label>
          Order number: <input type="text" value={info.orderId} disabled />
        </label>
        <label>
          Provider: <input type="text" value={info.providerName} disabled />
        </label>
        <label>
          Creation date: <input type="datetime" value={info.date} disabled />
        </label>
      </div>
    </>
  )
})