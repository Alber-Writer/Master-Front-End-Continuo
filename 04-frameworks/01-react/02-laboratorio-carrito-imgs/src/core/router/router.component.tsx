import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWICHTROUTES } from "@/core/router";
import { CheckoutScene, ProductScene, WrongPathScene } from "@/scenes";
import { profileContext } from "@/core/profile";
import { cartContext } from "@/core/cart-context";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
      cartContext
        <Route
          path={SWICHTROUTES.specificProducts}
          element={<ProductScene />}
        />
        <Route
          path={SWICHTROUTES.generalProducts}
          element={<ProductScene />}
        />{/* TODO: delete... only helper */}
        <Route
          path={SWICHTROUTES.checkout}
          element={<CheckoutScene />}
        />
        <Route
          path={"*"}
          element={<WrongPathScene />}
        />
      </Routes>
    </Router>
  );
};
