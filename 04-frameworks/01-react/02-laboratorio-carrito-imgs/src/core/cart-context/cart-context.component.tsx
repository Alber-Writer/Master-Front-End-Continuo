import React from "react";
//TODO: cache?

interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
}

interface CartContext {
  cartProducts: PictureInfo[];
  setCartProducts: (value: PictureInfo[]) => void;
}

const createEmptyCart = (): CartContext => ({
  cartProducts: [
    {
      id: "",
      picUrl: "",
      title: "",
    },
  ],
  setCartProducts: (value) => {
    console.warn("Use a Provider wrapping your code!!!");
  },
});

export const cartContext = React.createContext<CartContext>(createEmptyCart());

interface Props {
  children?: React.ReactNode;
}

export const CartProvider: React.FC<Props> = (props: Props) => {
  const [cartProducts, setCartProducts] = React.useState<PictureInfo[]>([
    {
      id: "eeempty id",
      picUrl: "eeempty picUrl",
      title: "eeempty title",
    },
  ]);

  return (
    <cartContext.Provider value={{ cartProducts, setCartProducts }}>
      {props.children}
    </cartContext.Provider>
  );
};
