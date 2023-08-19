import React from "react";

import { Box, Header } from "@/common/components";
import { minHeight } from "@mui/system";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
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
          {children}
        </Box>

      </Box>
    </>
  );
};
