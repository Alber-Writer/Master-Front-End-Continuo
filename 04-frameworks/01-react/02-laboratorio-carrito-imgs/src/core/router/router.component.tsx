import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWICHTROUTES } from "@/core/router";
import { WrongPathScene } from "@/scenes";
import { profileContext } from "@/core/profile";



export const ProductsAndCartScene: React.FC = () => {

  return (
    <>
    <h1>ProductsAndCartScene</h1>
    <ProductPageContainer />
    <CartPod />
    </>
  );
};


export const CartPod: React.FC = () => {
  
  return (
    <>
    <h3>Cart Pod</h3>
    </>
  );
};

export const ProductPageContainer: React.FC = () => {

  return (
    <>
    <h3>ProductPageContainer</h3>
    </>
  );
};

export const CheckoutScene: React.FC = () => {
  
  return (
      <>
      <h1>CheckoutScene</h1>
      <CartPod />
      </>
    );
  };
      
  
  export const CheckoutPod: React.FC = () => {
      
        return (
          <>
          <h3>CheckoutPod</h3>
          </>
        );
      };



export const RouterComponent: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route
          path={SWICHTROUTES.productsAndCart}
          element={<ProductsAndCartScene />}
        />
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
