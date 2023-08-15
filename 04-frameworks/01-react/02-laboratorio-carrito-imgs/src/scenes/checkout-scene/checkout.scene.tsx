import React from "react";
import { MainAndAsideLayout } from "@/layout";
import { CartContainer, CheckoutContainer } from "@/pods/";

export const CheckoutScene: React.FC = () => {
  return (
    <>
      <MainAndAsideLayout asideComponent={<CartContainer/>}>
        <CheckoutContainer />
      </MainAndAsideLayout>
      <h1>Checkout Scene</h1>
    </>
  );
};
