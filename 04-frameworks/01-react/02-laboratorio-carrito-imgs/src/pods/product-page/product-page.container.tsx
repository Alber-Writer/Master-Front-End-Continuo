import React from "react";
import { ProductPageComponent } from "./product-page.component";
import { useProductList } from "./hooks/use-product-list.hook";

interface Props {
  children?: React.ReactNode;
}

export const ProductPageContainer: React.FC<Props> = (props: Props) => {
  const {initialProductList: productList} = useProductList();
  return <ProductPageComponent productList={productList} />;
};