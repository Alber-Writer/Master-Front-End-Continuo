import { IDetailTask } from '../../view-model/order.vm.model';

export function DetailRow({
  detail: d, handleDetailTasks,
}: {
  detail: IDetailTask;
  handleDetailTasks: (
    id: string,
    propToUpdate: keyof IDetailTask
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={d.detailId + 'checkbox'}
          checked={d.isCompleted}
          onChange={handleDetailTasks(d.detailId, 'isCompleted')} />
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
          required />
      </td>
    </tr>
  );
}
