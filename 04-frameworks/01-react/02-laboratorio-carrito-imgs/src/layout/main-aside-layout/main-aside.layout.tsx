import React from "react";

import { Box, Header } from "@/common/components";
import { minHeight } from "@mui/system";

interface Props {
  children?: React.ReactNode;
  asideComponent: React.ReactNode;
}

export const MainAndAsideLayout: React.FC<Props> = (props: Props) => {
  const {children, asideComponent} = props;
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
          {children}
        </Box>
        <Box sx={{ backgroundColor: "teal", flexBasis: "35vw" }}>
          {asideComponent}
        </Box>
      </Box>
    </>
  );
};
