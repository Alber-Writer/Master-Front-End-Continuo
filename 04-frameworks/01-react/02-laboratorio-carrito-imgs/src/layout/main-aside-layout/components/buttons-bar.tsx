import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingCartCheckout";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import { Box } from "@/common/components";

interface Props {
  children?: React.ReactNode;
  onBtnClick: () => void;
}
export const ButtonsBar: React.FC<Props> = (props: Props) => {
  const { onBtnClick } = props;
  const { primary, secondary } = useTheme().palette;
  return (
    <Stack direction={"column"} max-width="50px" rowGap='5px'>
      <Box
        padding=".7rem"
        borderRadius=".5rem 0 0 .5rem"
        display="flex"
        alignContent="center"
        alignItems="center"
        bgcolor={secondary.main}
        height="50px"
        onClick={onBtnClick}
        sx={{ cursor: "pointer" }}
      >
        <ShoppingBasketIcon htmlColor={primary.light} />
      </Box>
    </Stack>
  );
};
