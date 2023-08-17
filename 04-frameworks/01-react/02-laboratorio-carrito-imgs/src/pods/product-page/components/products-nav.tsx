import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core/router";

export const ProductNav: React.FC = () => {
  return (
    <>
      Images:
      <br />
      <Link to={routes.products("images", "cats")}>Cats</Link>
      <br />
      <Link to={routes.products("images", "kittens")}>Kitten</Link>
    </>
  );
};
