import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export const Header: React.FC = () => {
  const {primary} = useTheme().palette;
  return (
    <AppBar elevation={0} sx={{ zIndex: 100, background:primary.dark }}>
      <Toolbar sx={{border:0}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React cart-app practice
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
