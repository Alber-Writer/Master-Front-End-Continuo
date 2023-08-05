import React from "react";

import { Box, Header } from "@/common/components";

interface Props {
  children?: React.ReactNode;
}

export const ProductAndCartLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {props.children}
      </Box>
    </>
  );
};
