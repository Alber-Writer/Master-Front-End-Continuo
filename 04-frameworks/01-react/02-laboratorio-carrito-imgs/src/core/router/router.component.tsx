import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {routes as existingRoutes, SWICHTROUTES } from "@/core/router";
import { CheckoutScene, ProductScene } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
        index 
          path={SWICHTROUTES.specificProducts}
          element={<ProductScene />}
        />
        <Route
          path={SWICHTROUTES.checkout}
          element={<CheckoutScene />}
        />
         <Route
          path={SWICHTROUTES.root}
          element={<Navigate replace to={existingRoutes.specificProducts("images", "cats")} />}
        /> 
        <Route
          path={"*"}
          element={<Navigate replace to={existingRoutes.specificProducts("images", "cats")} />}
        />
      </Routes>
    </Router>
  );
};
