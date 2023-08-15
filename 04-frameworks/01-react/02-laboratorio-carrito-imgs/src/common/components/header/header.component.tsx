import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { profileContext, routes } from "@/core";
import { removeCacheLogin } from "@/core/profile/profile-business/profile-cache";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@/common/components/button";

import imgLogout from "@/assets/logout.svg";
import classes from "./header.style.css";

export const Header: React.FC = () => {
  const profContext = useContext(profileContext);
  const navigate = useNavigate();
  const logout = () => {
    removeCacheLogin();
    profContext.setProfile({ username: "", isLogged: false });
    navigate(routes.root);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React fake-app
          </Typography>
          <Link to="/products/">Products</Link>
          <Link to="/checkout/">Checkout</Link>
          <Button color="inherit">{profContext.profile.username}</Button>
          <Button color="inherit" onClick={logout}>
            <img
              src={imgLogout}
              alt="Logout icon"
              className={classes.logoutImg}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
