import React, { useRef } from "react";

import {Select} from "@/common//components/select";
import { Box } from "@/common//components/box";

import MenuItem from "@mui/material/MenuItem";

interface Props {
  itemsPerPage: number;
  handleSetItemsPerPage: (value: number) => void;
}
export const ItemsPerPageSelector: React.FC<Props> = (props: Props) => {
  const { itemsPerPage, handleSetItemsPerPage } = props;
  const initialItemsPerPage = useRef(itemsPerPage);
  const itemsPerPageOptions = [
    initialItemsPerPage.current,
    "5",
    "10",
    "15",
    "20",
  ];
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <span>Show up to</span>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={itemsPerPage}
        onChange={(e) => handleSetItemsPerPage(Number(e.target.value))}
        size="small"
        sx={{margin:"0 0.5rem"}}
      >
        {itemsPerPageOptions.map((element) => (
          <MenuItem value={element} key={`id_${element}`}>
            {element}
          </MenuItem>
        ))}
      </Select>
      <span> members per page</span>
    </Box>
  );
};
