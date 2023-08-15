import React from "react";

import { MainAndAsideLayout } from "@/layout";
import { WrongPath } from "@/pods";
import { Header } from "@/common/components";

interface Props{
  children?: React.ReactNode;
}

export const WrongPathScene: React.FC<Props> = (props:Props) => {
  return (<>
    {/* <MainAndAsideLayout> */}
    <Header/>
      <WrongPath />
    {/* </MainAndAsideLayout> */}
  </>
  );
};
