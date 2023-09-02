import React from "react";
import { MainAndAsideLayout, MainLayout } from "@/layout";
import { CartContainer, CheckoutContainer } from "@/pods/";

export const CheckoutScene: React.FC = () => {
  return (
      <MainLayout>
        <CheckoutContainer />
      </MainLayout>
  );
};
