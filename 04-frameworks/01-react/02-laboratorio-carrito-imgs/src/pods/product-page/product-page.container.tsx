import { Box } from "@/common/components";
import { Checkbox } from "@mui/material";
import React from "react";
import { pictureApi } from "./product-page.repository";
import { PictureEntityVM } from "./product-page.vm";

interface Props {
  children?: React.ReactNode;
}

export const ProductPageContainer: React.FC<Props> = (props: Props) => {
  const [loadedProducts, setLoadedProducts] = React.useState<PictureEntityVM[]>(
    [
      {
        id: "",
        picUrl: "",
        title: "",
      },
    ]
  ); //TODO: create function to fill empty loadedProducts
  React.useEffect(() => {
    pictureApi("cats").then((res) => setLoadedProducts(res));
  }, []);
  return (
    <>
      <h3>ProductPageContainer</h3>
      <ul>
        {loadedProducts.map((product) => (
          <li key={product.id}>
            <h4>Title: {product.title}</h4>
            <Box sx={{ overflow: "hidden", height: 250, maxWidth: 250 }}>
              <img src={product.picUrl} alt="" height="300" />
            </Box>
            <span>Id: {product.id}</span>
            <label htmlFor={`check_${product.id}`}>
              Add to cart
              <input id={`check_${product.id}`} type="checkbox" />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
