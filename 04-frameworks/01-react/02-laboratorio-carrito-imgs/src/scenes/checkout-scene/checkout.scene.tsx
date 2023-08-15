import React from "react";
import { ProductPageContainer } from "@/pods/product-page";
import { AsideCartLayout } from "@/layout";
import { CheckoutContainer } from "@/pods/";

export const CheckoutScene: React.FC = () => {
  return (
    <>
      <AsideCartLayout>
        <CheckoutContainer />
      </AsideCartLayout>
      <h1>Checkout Scene</h1>
    </>
  );
};
