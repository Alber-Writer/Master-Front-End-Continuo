import React from "react";

import { MainLayout } from "@/layout";
import { WrongPath } from "@/pods";

interface Props{
  children?: React.ReactNode;
}

export const WrongPathScene: React.FC<Props> = (props:Props) => {
  return (
    <MainLayout>
      <WrongPath />
    </MainLayout>
  );
};
