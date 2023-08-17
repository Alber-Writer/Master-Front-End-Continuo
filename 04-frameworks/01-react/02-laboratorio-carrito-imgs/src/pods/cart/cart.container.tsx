import { Box } from "@/common/components";
import { cartContext } from "@/core";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

export const CartContainer: React.FC = () => {
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const quitFromCart = (index: number) => {
    const newCart = [...cartProducts];
    newCart.splice(index, 1);
    setCartProducts(newCart);
  };
  React.useEffect(() => {}, [cartProducts]);
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
    </>
  );
};
