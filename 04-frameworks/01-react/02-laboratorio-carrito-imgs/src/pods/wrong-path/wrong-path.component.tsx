import { routes } from "@/core";
import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

export const WrongPath: React.FC = () => {
  return (
    <Stack>
      <h2>404 - Page not found...</h2>
      Try with this list:
      <Link to={routes.root}>Root</Link>
    </Stack>
  );
};
