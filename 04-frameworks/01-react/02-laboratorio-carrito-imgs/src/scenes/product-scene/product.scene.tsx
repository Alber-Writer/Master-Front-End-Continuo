import React from "react";
import { ProductPageContainer } from "@/pods/product-page";
import { MainAndAsideLayout } from "@/layout";
import { CartContainer } from "@/pods";
import { ProductNav } from "@/pods/product-page/components/products-nav";

export const ProductScene: React.FC = () => {
  return (
    <>
      <MainAndAsideLayout asideComponent={<CartContainer />}>
        <ProductNav />
        <ProductPageContainer />
      </MainAndAsideLayout>
    </>
  );
};
