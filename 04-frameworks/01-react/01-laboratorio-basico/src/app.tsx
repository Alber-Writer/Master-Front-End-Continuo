import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list/:urlOrganization" element={<ListPage />} />
        <Route path="/detail/:urlOrganization/:id/" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
