import React from "react";
import { ProductPageContainer } from "@/pods/product-page";
import { MainAndAsideLayout } from "@/layout";
import { CartContainer } from "@/pods";

export const ProductScene: React.FC = () => {
  return (
    <>
      <MainAndAsideLayout asideComponent={<CartContainer/>}>
        <ProductPageContainer />
      </MainAndAsideLayout>
      <h1>ProductsAndCartScene</h1>
    </>
  );
};
