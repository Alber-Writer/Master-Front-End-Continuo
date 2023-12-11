import React, { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import {
Paper,
  Table,
  TableBody,
  TableContainer
} from "@mui/material";

import { cartContext } from "@/core/cart-context";
import { Box} from "@/common/components";
import { CartProductRowComponent } from "./components/product-row.cart.component";

interface Props{
  children?: React.ReactNode;
}
export const CartComponent: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const { primary } = useTheme().palette;
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const removeItemFromCart = (index: number) => {
    const updatedCart = [...cartProducts];
    updatedCart.splice(index, 1);
    setCartProducts(updatedCart);
  };
  return (
    <>
      <Box
        overflow={"auto"}
        flexBasis={35}
        flexGrow={1}
        className="global-scrollbar"
        color={primary.contrastText}
        p={"1rem 1rem 1rem 0rem"}
        m={"2rem 2rem 1rem 2rem"}
      >
        {!cartProducts?.length && "Empty Cart. Add some pictures ;)"}
        <TableContainer component={Paper}>
          <Table color={primary.contrastText}>
            <TableBody color={primary.contrastText}>
              {cartProducts.map((product, index) => (
                <CartProductRowComponent product={product} index={index} removeItemHandler={removeItemFromCart} key={index}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {children}
    </>
  );
};