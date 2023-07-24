import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWICHTROUTES } from "./routes";
import { LoginScene, ListScene, DetailScene } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={SWICHTROUTES.root} element={<LoginScene />} />
        <Route path={SWICHTROUTES.list} element={<ListScene />} />
        <Route path={SWICHTROUTES.details} element={<DetailScene />} />
        <Route path={"*"} element={<LoginScene />} />
      </Routes>
    </Router>
  );
};
