import React from "react";

import { CartProvider, CustomThemeProvider, RouterComponent } from "@/core";
import { localDataManager as localCart } from "@/common/business/local-storage";

export const App = () => {
  const {getLocalData} = localCart('cart');
  return (
    <CustomThemeProvider>
      <CartProvider savedCartFromExternalStorage={getLocalData()}>
        <RouterComponent />
      </CartProvider>
    </CustomThemeProvider>
  );
};
