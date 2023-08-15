import { Box } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const CartContainer: React.FC = () => {
  
  return (
    <Box sx={{backgroundColor:"teal", flexGrow:1, flexBasis:"20vw"}}>
    <h3>Cart Pod</h3>
    </Box>
  );
};