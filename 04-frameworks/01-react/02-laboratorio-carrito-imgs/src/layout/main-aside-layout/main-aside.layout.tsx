import React from "react";

import { Box, Header } from "@/common/components";

interface Props {
  children?: React.ReactNode;
  asideComponent: React.ReactNode;
}

export const MainAndAsideLayout: React.FC<Props> = (props: Props) => {
  const { children, asideComponent } = props;
  return (
    <>
      <Box sx={{ width: "100%", height: "10vh",position:'fixed' }}>
        <Header />
      </Box>
      <Box
        sx={{
          backgroundColor: "lightslategray",
          width: "65%",
          overflowY: "scroll",
          maxHeight: "90vh",
          position:"fixed",
          bottom:0,
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          backgroundColor: "teal",
          width: "35%",
          position: "fixed",
          height: "90vh",
          right: 0,
          bottom: 0,
          display: "flex",
          alignContent: "space-between",
          flexDirection: "column",
        }}
      >
        {asideComponent}
      </Box>
    </>
  );
};
