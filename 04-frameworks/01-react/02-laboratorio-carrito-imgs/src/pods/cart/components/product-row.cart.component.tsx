import React from 'react';
import { useTheme } from "@mui/material/styles";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import { Box, Button } from "@/common/components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { PictureInfo } from "@/core/cart-context";

interface Props {
  children?: React.ReactNode;
  product: PictureInfo;
  index?: number;
  removeItemHandler?: (index:number)=>void
}

export const CartProductRowComponent: React.FC<Props> = (props:Props) => {
  const {product, index, removeItemHandler, children} = props
  const { primary } = useTheme().palette;
  return <TableRow
  color={primary.contrastText}
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  key={index}
>
  <TableCell component="th" scope="row">
    <Box
      overflow={"hidden"}
      height="45px"
      maxWidth="45px"
      borderRadius={"5px"}
      bgcolor={primary.dark}
    >
      <img src={product.picUrl} alt="" height="50" />
    </Box>
  </TableCell>
  <TableCell align="right">{product.title}</TableCell>
  <TableCell align="right">{product.id}</TableCell>
  <TableCell align="right">{product.price}&nbsp;€</TableCell>
  <TableCell align="right">
    <Button onClick={() => removeItemHandler(index)}>
      <HighlightOffIcon color="secondary" />
    </Button>
  </TableCell>
</TableRow>;
};