import { Box } from "@/common/components";
import { cartContext } from "@/core";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

export const CartContainer: React.FC = () => {
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const quitFromCart = (index: number) => {
    const newCart = [...cartProducts];
    newCart.splice(index, 1);
    setCartProducts(newCart);
  };
  React.useEffect(() => {
    const localStorageProducts = localStorage.getItem("cart");
    if(!cartProducts.length) setCartProducts(JSON.parse(localStorageProducts))
  }, []);
  React.useEffect(() => {
    setTotalPrice(cartProducts.reduce((acc,current)=> {return acc = acc + Number(current.price)},0));
    localStorage.setItem("cart", `${JSON.stringify(cartProducts)}`)
    console.log(totalPrice);
  }, [cartProducts]);
  return (
    <>
      <h3>Cart Pod</h3>
      <ul>
        {cartProducts.map((product, index) => (
          <li key={product.id}>
            <Box sx={{ overflow: "hidden", height: 35, maxWidth: 35 }}>
              <img src={product.picUrl} alt="" height="50" />
            </Box>
            <p>Id:{product.id}</p>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                quitFromCart(index);
              }}
            >
              Quit
            </a>
          </li>
        ))}
      </ul>
      {!cartProducts.length && "Empty Cart. Add some pictures ;)"}
      {!!cartProducts.length && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCartProducts([]);
          }}
        >
          Remove all products from cart
        </a>
      )}
      {!!cartProducts.length && (
        <Link to="/checkout">Proceed to checkout</Link>
      )}
      {totalPrice > 0 && <p>Total: {totalPrice}€</p>}
    </>
  );
};
