import { useState } from 'react';
import { OrderDetails as Details } from '../api/get-order.AM.model'

interface OrderDetailsProps {
  children?: React.ReactNode
  details: Details[]
}

export const OrderDetails: React.FC<OrderDetailsProps> = (
  props: OrderDetailsProps
) => {
  const { details, children } = props;
  const [isEditable, setIsEditable] = useState(false);

  const handleEnableEditMode = () => {
    setIsEditable(true);
  };
  const handleCancelEdits = () => {
    setIsEditable(false);
  };

  return (
    <>
      <div className="flex-rows box">
        <div className="fwidth">
          {isEditable ? (
            <>
              <button className="validation">Validate changes</button>
              <button className="cancel" onClick={handleCancelEdits}>Cancel</button>
            </>
          ) : (
            <button className="enable" onClick={handleEnableEditMode}>Edit details</button>
          )}
        </div>
      </div>

      <table className='box'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.detailId}>
              <td>ID: {detail.detailId}</td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={detail.detailIsAccomplished}
                  disabled={!isEditable} />
              </td>
              <td>{detail.detailDescription}</td>
              <td>
                <input type="text" value={`${detail.price} €`} disabled={!isEditable} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {children}
    </>
  );
};
