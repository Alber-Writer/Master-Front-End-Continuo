import React, { useContext } from "react";
import { Box, Button } from "@/common/components";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "@/core";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import RemoveAllItems from "@mui/icons-material/PlaylistRemove";
import classes from "./cart.styles.css";

interface Props {
  children?: React.ReactNode;
  showCheckoutBtn?: boolean;
  showRemoveAllBtn?: boolean;
}

export const CartContainer: React.FC<Props> = (props: Props) => {
  const { children, showCheckoutBtn = true, showRemoveAllBtn=true } = props;

  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const quitFromCart = (index: number) => {
    const newCart = [...cartProducts];
    newCart.splice(index, 1);
    setCartProducts(newCart);
  };
  React.useEffect(() => {
    const localStorageProducts = localStorage.getItem("cart");
    if (!cartProducts.length) setCartProducts(JSON.parse(localStorageProducts));
  }, []);
  React.useEffect(() => {
    setTotalPrice(
      cartProducts.reduce((acc, current) => {
        return (acc = acc + Number(current.price));
      }, 0)
    );
    localStorage.setItem("cart", `${JSON.stringify(cartProducts)}`);
    console.log(totalPrice);
  }, [cartProducts]);
  return (
    <>
      <h3>Your cart</h3>

      <Box
        sx={{
          overflowY: "scroll",
          flexBasis: 35,
          flexGrow: 1,
        }}
      >
        {!cartProducts.length && "Empty Cart. Add some pictures ;)"}
        <ul>
          {cartProducts.map((product, index) => (
            <li key={product.id} className={classes.element}>
              <Box sx={{ overflow: "hidden", height: 35, maxWidth: 35 }}>
                <img src={product.picUrl} alt="" height="50" />
              </Box>
              <p>Id:{product.id}</p>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}€</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  quitFromCart(index);
                }}
              >
                <RemoveCircleIcon color="primary" />
              </a>
            </li>
          ))}
        </ul>
      </Box>
      
      {showRemoveAllBtn && !!cartProducts.length && (
        <Button
          component="a"
          variant="contained"
          href="#"
          onSubmit={(e) => {
            e.preventDefault();
            setCartProducts([]);
          }}
        >
          <RemoveAllItems /> Remove all products from cart
        </Button>
      )}
      {totalPrice > 0 && <p>Total: {totalPrice}€</p>}
      {showCheckoutBtn && !!cartProducts.length && (
        <Button component={Link} variant="contained" to="/checkout">
          <ShoppingCartCheckoutIcon /> Proceed to Checkout
        </Button>
      )}
    </>
  );
};
