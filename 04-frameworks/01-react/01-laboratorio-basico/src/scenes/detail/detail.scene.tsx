import React from "react";

import { MainLayout } from "@/layout";
import { DetailContainer } from "@/pods/detail/detail.container";

export const DetailScene: React.FC = () => {
  return (
    <MainLayout>
      <DetailContainer />
    </MainLayout>
  );
};