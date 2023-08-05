import React from "react";

import { CartProvider, ProfileProvider, RouterComponent } from "@/core";

export const App = () => {
  return (
    <ProfileProvider>
      <CartProvider>
        <RouterComponent />
      </CartProvider>
    </ProfileProvider>
  );
};
