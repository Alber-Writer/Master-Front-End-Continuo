import React from "react";

import { CartComponent } from "./cart.component";
import { CartOptions } from "./components/options.cart.component";

interface Props {
  children?: React.ReactNode;
  showCheckoutBtn?: boolean;
  showRemoveAllBtn?: boolean;
}

export const CartContainer: React.FC<Props> = (props: Props) => {
  const { children, showCheckoutBtn, showRemoveAllBtn } = props;
  return (
    <>
      <CartComponent />
      {children}
      <CartOptions showCheckoutBtn={showCheckoutBtn} showRemoveAllBtn={showRemoveAllBtn}/>
    </>
  );
};
