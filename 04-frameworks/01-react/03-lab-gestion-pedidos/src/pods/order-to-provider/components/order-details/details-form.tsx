import { FormEventHandler } from 'react'
import { IDetailTask } from '../../view-model/order.vm.model'
import { useDetailsForm } from '../../hooks/use-details-form'
import { DetailRow } from './detail-row'

export const DetailsForm = ({
  initialList,
  handleSubmit,
}: {
  initialList: IDetailTask[]
  handleSubmit: (
    newlist: IDetailTask[],
  ) => FormEventHandler<HTMLFormElement> | undefined
}) => {
  const { list, handleDetailTasks, handleCancelDetailsTasks } =
    useDetailsForm(initialList)
  return (
    <>
      <form onSubmit={handleSubmit(list)} onReset={handleCancelDetailsTasks}>
        <div className="fwidth">
          <h4>Details in this order:</h4>
        </div>
        <div className="detail-box flex-rows">
          <div id="detailsFormControls" className="box">
            <div className="fwidth">
              <button type="submit" className="validation">
                Validate changes
              </button>
              <button type="reset" className="cancel">
                Cancel
              </button>
            </div>
          </div>

          <table className="box fwidth">
            <thead>
              <tr>
                <th>Status</th>
                <th>Description</th>
                <th>Price in €</th>
              </tr>
            </thead>
            <tbody>
              {list.map((d) => {
                return (
                  <DetailRow
                    detail={d}
                    handleDetailTasks={handleDetailTasks}
                    key={d.detailId}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </form>
    </>
  )
}

