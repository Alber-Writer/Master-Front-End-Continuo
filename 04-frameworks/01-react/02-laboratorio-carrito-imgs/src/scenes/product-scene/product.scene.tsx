import React from "react";
import { ProductPageContainer } from "@/pods/product-page";
import { AsideCartLayout } from "@/layout";

export const ProductScene: React.FC = () => {
  return (
    <>
      <AsideCartLayout>
        <ProductPageContainer />
      </AsideCartLayout>
      <h1>ProductsAndCartScene</h1>
    </>
  );
};
