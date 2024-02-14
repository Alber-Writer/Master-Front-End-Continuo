import { FormEventHandler, useEffect, useState } from 'react'
import { IDetailTask } from '../api/order.AM.model'

export const DetailsForm = ({
  initialList,
  handleSubmit,
}: {
  initialList: IDetailTask[]
  handleSubmit: (
    newlist: IDetailTask[],
  ) => FormEventHandler<HTMLFormElement> | undefined
}) => {
  const [list, setList] = useState(initialList)

  useEffect(() => {
    setList(initialList)
  }, [initialList])

  const handleDetailTasks =
    (id: string, propToUpdate: keyof IDetailTask) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const setDataType = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') return e.target.checked
        if (e.target.type === 'text')
          return e.target.value.replace(',', '.').replace('€', '') || 0
      }

      setList(
        list.map((d: IDetailTask) => {
          if (id === d.detailId)
            return {
              ...d,
              ...{
                [propToUpdate]: setDataType(e),
              },
            }
          return d
        }),
      )
    }
  return (
    <>
      <form onSubmit={handleSubmit(list)}>
        <div className="fwidth">
          <h4>Details in this order:</h4>
        </div>
        <div className="detail-box flex-rows">
          <div className="box">
            <div className="fwidth">
              <button type="submit" className="validation">
                Validate changes
              </button>
              <button type="reset" className="cancel" onClick={() => {}}>
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
                  <tr key={d.detailId}>
                    <td>
                      <input
                        type="checkbox"
                        id={d.detailId + 'checkbox'}
                        checked={d.isCompleted}
                        onChange={handleDetailTasks(d.detailId, 'isCompleted')}
                      />
                      <span>{d.isCompleted ? 'Completed' : 'Pending'}</span>
                    </td>
                    <td>{d.detailDescription}</td>
                    <td>
                      <input
                        type="string"
                        id={d.detailId + '_price'}
                        min={0}
                        max={100000}
                        step={0.01}
                        pattern="^(\d{1,6})((.|,)(\d{0,2}))?"
                        value={`${d.price}`}
                        onChange={handleDetailTasks(d.detailId, 'price')}
                        required
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </form>
    </>
  )
}
