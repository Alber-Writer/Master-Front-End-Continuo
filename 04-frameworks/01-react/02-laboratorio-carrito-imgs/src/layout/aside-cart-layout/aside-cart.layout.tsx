import React from "react";

import { Box, Header } from "@/common/components";
import { CartContainer as CartPod} from "@/pods";
import { minHeight } from "@mui/system";

interface Props {
  children?: React.ReactNode;
}

export const AsideCartLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          alignItems: "stretch",
          alignContent: "stretch",
          margin: 0,
        }}
      >
        <Box
          sx={{
            flexGrow: 2,
            backgroundColor: "lightslategray",
          }}
        >
          ---Products
          {props.children}
        </Box>
        <CartPod />
      </Box>
      ----AsideCartLayout
    </>
  );
};
