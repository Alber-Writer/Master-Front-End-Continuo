import { routes } from "@/core";
import React from "react";
import { Link } from "react-router-dom";

export const WrongPath: React.FC = () => {
  return (
    <>
      <h2>404 - Page not found...</h2>
      Try with this list:
      <Link to={routes.list("lemoncode")}>Lemoncode</Link>
    </>
  );
};
