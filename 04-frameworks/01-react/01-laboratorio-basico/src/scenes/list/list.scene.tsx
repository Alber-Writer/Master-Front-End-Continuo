import React from "react";
import { MainLayout } from "@/layout";
import {ListContainer} from "@/pods/list"

export const ListScene: React.FC = () => {

  return (
    <MainLayout>
      <ListContainer/>
    </MainLayout>
  );
};

//TODO: add MUI - check roboto font
//History api fallback @webpack... not running
