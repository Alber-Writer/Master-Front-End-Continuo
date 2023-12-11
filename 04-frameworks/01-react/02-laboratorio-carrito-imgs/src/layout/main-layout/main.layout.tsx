import React from "react";

import { Box, Header } from "@/common/components";
import { useTheme } from "@mui/material/styles";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  const {children} = props;
  const {primary} = useTheme().palette;
  return (
    <>
      <Header />
      <Box
          width= "100%"
          display= "flex"
          justifyContent= "center"
          padding= {0}
          alignItems= "stretch"
          alignContent= "stretch"
          margin= {0}
      >
        <Box
        flexGrow={2}
        bgcolor={primary.light}
        >
          {children}
        </Box>

      </Box>
    </>
  );
};
