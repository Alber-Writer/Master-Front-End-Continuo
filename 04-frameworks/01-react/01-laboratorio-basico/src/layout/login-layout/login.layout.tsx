import {Box} from "@/common/components/box";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const LoginLayout: React.FC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh"
      }}
    >
      {props.children}
    </Box>
  );
};
