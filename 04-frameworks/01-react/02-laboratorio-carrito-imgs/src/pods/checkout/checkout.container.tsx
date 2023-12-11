import React from "react";
import Checkout from "./Checkout";

interface Props {
  children: React.ReactNode;
}

export const CheckoutContainer: React.FC = () => {
  return <>
      <Checkout />
  </>;
};
