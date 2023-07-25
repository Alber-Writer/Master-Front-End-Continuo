import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWICHTROUTES } from "@/core/router";
import { LoginScene, ListScene, DetailScene } from "@/scenes";
import { profileContext } from "@/core/profile";

export const RouterComponent: React.FC = () => {
  const context = useContext(profileContext);
  const isUserLogged = context.profile.isLogged;

  return (
      <>
      {context.profile.username}, 
      {isUserLogged.toString()}
      <Router>
        <Routes>
          <Route path={SWICHTROUTES.root} element={<LoginScene />} />
          <Route path={SWICHTROUTES.list} element={isUserLogged ?  <ListScene /> : <LoginScene />} />
          <Route path={SWICHTROUTES.details} element={isUserLogged ? <DetailScene /> : <LoginScene/>} />
          <Route path={"*"} element={isUserLogged ? <ListScene /> : <LoginScene />} />//TODO: fix unknown paths
        </Routes>
      </Router>
      </>
  );
};
