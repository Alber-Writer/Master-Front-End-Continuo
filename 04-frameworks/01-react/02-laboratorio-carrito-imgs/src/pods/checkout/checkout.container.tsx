import React from "react";
import Checkout from "./Checkout";

interface Props {
  children: React.ReactNode;
}

export const CheckoutContainer: React.FC = () => {
  return <>
    <h1>
      CheckOut Container
      </h1>
      <Checkout />
  </>;
};
