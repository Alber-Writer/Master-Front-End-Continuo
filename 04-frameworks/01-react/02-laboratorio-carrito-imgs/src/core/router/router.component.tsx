import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWICHTROUTES } from "@/core/router";
import { CheckoutScene, ProductScene, WrongPathScene } from "@/scenes";
import { profileContext } from "@/core/profile";

export const RouterComponent: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route
          path={SWICHTROUTES.products}
          element={<ProductScene />}
        />
        <Route
          path={SWICHTROUTES.productsTease}
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
