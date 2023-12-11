import React from "react";
import { ProductPageContainer } from "@/pods/product-page";
import { MainAndAsideLayout } from "@/layout";
import { CartContainer } from "@/pods";
import { ProductNav } from "@/pods/product-page/components/products-nav";
import { Box } from "@/common/components";


export const ProductScene: React.FC = () => {
  return (
    <MainAndAsideLayout asideComponent={<CartContainer />} asideTitle="Cart">
      <Box height="10%">
        <ProductNav />
      </Box>
      <Box
        height="90%"
        overflow="auto"
        padding="0 1rem"
        className="global-scrollbar"
      >
        <ProductPageContainer />
      </Box>
    </MainAndAsideLayout>
  );
};
