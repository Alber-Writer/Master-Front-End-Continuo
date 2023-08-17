import React, { useContext } from "react";
import { Box } from "@/common/components";
import { routes } from "@/core/router";
import { pictureApi } from "./product-page.repository";
import { PictureEntityCheckedVM, PictureEntityVM } from "./product-page.vm";
import { Link, useParams } from "react-router-dom";
import { ProductNav } from "./components/products-nav";
import { cartContext } from "@/core";

interface Props {
  children?: React.ReactNode;
}

export const ProductPageContainer: React.FC<Props> = (props: Props) => {
  const [loadedProducts, setLoadedProducts] = React.useState<
    PictureEntityCheckedVM[]
  >([
    {
      id: "",
      picUrl: "",
      title: "",
      selected: false,
    },
  ]); //TODO: create function to fill empty loadedProducts
  const { pageId } = useParams();
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const currentCart = React.useRef(cartProducts)
  React.useEffect(() => {
    pictureApi(pageId).then((res) => setLoadedProducts(res)); //TODO: ?? VM
  }, [pageId, currentCart]);//TODO:seguir... cuando cart delete... uncheck
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
              {product.id}
              <input
                id={`check_${product.id}`}
                type="checkbox"
                checked={product.selected}
                onChange={(e) => {
                  if(e.target.checked){
                    product.selected = true;
                    setCartProducts([...cartProducts, product])
                  }else{
                    product.selected = false;
                    setCartProducts([...cartProducts.filter(elem=>elem.id !== product.id)])
                  }
                }}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
