import React, { useContext } from "react";
import { cartContext, PictureInfo } from "@/core";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@/common/components";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { RemoveAllBtnModal } from "./remove-all.cart.component";

interface Props {
  children?: React.ReactNode;
  showCheckoutBtn?: boolean;
  showRemoveAllBtn?: boolean;
}
export const CartOptions: React.FC<Props> = (props:Props)=>{
  const { children, showCheckoutBtn = true, showRemoveAllBtn = true } = props;
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  React.useEffect(() => {
    setTotalPrice(cartPrice);
  }, [cartProducts]);

  const cartPrice = cartProducts.reduce((acc, current) => {
    return (acc = acc + Number(current.price));
  }, 0);

  const removeAllFromCart = () => {
    setCartProducts([]);
  };

  const { primary } = useTheme().palette;

  return(<Box
    display="flex"
    flexWrap="wrap"
    justifyContent="space-around"
    minHeight={"10vh"}
    padding="3rem"
  >
    {totalPrice > 0 && (
      <Typography
        variant="h6"
        textAlign="center"
        margin="1rem 0"
        width="100%"
        color={primary.contrastText}
      >
        Products selected: {cartProducts.length} | Total: {totalPrice}€
      </Typography>
    )}

    {showRemoveAllBtn && !!cartProducts.length && (
      <RemoveAllBtnModal removeAction={removeAllFromCart} />
    )}
    {showCheckoutBtn && !!cartProducts.length && (
      <RouterLink to="/checkout">
        <Button
          variant="contained"
          color="secondary"
          sx={{ maxWidth: "250px" }}
        >
          <ShoppingCartCheckoutIcon /> Checkout
          
        </Button>
      </RouterLink>
    )}
    {children}
  </Box>
  )
}