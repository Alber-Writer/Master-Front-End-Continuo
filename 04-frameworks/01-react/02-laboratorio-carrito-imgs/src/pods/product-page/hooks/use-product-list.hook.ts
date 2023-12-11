import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "@/core";
import { pictureApi } from "../product-page.repository";
import { PictureEntityCheckedVM } from "../product-page.vm";

const createEmptyProductList = (): PictureEntityCheckedVM[] => [
  {
    id: "",
    picUrl: "",
    title: "",
    price: 0,
    selected: false,
  },
];

export const useProductList = () => {
  const [initialProductList, setInitialProductsList] = React.useState<
    PictureEntityCheckedVM[]
  >(createEmptyProductList());

  const { pageId } = useParams();
  const { cartProducts } = useContext(cartContext);

  React.useEffect(() => {
    pictureApi(pageId).then((res) => {
      const selectedColl = res.map((picture): PictureEntityCheckedVM => {
        const isChecked = cartProducts.some((elem) => elem.id === picture.id);
        return { ...picture, selected: isChecked };
      });
      setInitialProductsList(selectedColl);
    });
  }, [pageId, cartProducts]);

  return { initialProductList };
};
