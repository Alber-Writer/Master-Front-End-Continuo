import React from "react";

import { Box, Header } from "@/common/components";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>{props.children}</Box>
    </>
  );
};
