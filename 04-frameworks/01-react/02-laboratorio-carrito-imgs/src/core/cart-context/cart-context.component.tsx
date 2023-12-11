import React from "react";

export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  price: number;
}

interface CartContext {
  cartProducts: PictureInfo[];
  setCartProducts: (value: PictureInfo[]) => void;
}

export const createEmptyCart = (): CartContext => ({
  cartProducts: [
    {
      id: "",
      picUrl: "",
      title: "",
      price: 0,
    },
  ],
  setCartProducts: (value) => {
    console.warn("Use a Provider wrapping your code!!!");
  },
});

export const cartContext = React.createContext<CartContext>(createEmptyCart());

interface Props {
  children?: React.ReactNode;
  savedCartFromExternalStorage?: PictureInfo[]
}

export const CartProvider: React.FC<Props> = (props: Props) => {
  const {children, savedCartFromExternalStorage} = props;
  const [cartProducts, setCartProducts] = React.useState<PictureInfo[]>(savedCartFromExternalStorage || []);
  return (
    <cartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </cartContext.Provider>
  );
};
