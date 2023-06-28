import React, { useRef } from "react"

interface Props {
  itemsPerPage:number,
  handleSetItemsPerPage:(value:number)=>void;
}
export const ItemsPerPageSelector: React.FC<Props> = (props: Props) => {
  const {itemsPerPage, handleSetItemsPerPage} = props;
  const initialItemsPerPage = useRef(itemsPerPage);
  const itemsPerPageOptions = [initialItemsPerPage.current, "5", "10", "15", "20"];
  return(<div>
    <span>Show </span>
    <select
      name=""
      id=""
      value={itemsPerPage}
      onChange={(e) => handleSetItemsPerPage(Number(e.target.value))}
    >
      {itemsPerPageOptions.map(element =>
        <option value={element} key={`id_${element}`}>{element}</option>
      )}
    </select>
    <span> users per page</span>
  </div>
)
}