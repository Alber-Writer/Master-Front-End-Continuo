import React from "react";

import { Header } from "@/common/components";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
