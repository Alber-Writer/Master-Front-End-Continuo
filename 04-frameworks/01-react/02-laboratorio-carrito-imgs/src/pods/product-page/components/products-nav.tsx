import React from "react";
import { Stack } from "@mui/system";

import { routes } from "@/core/router";
import { MenuItem } from "./menu-item";


export const ProductNav: React.FC = () => {
  
  return (
    <Stack direction="row" spacing={2} padding={2}>
      <MenuItem destination={routes.specificProducts("images", "cats")}>Cats</MenuItem>
      <MenuItem destination={routes.specificProducts("images", "kittens")}>
        Kittens
      </MenuItem>
    </Stack>
  );
};
