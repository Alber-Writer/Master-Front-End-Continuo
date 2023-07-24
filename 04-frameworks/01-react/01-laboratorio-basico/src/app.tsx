import React from "react";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/scenes/login";
import { ListPage } from "@/list";
import { DetailPage } from "@/detail"; */
import { ProfileProvider, RouterComponent } from "@/core";

export const App = () => {
  return (
    <ProfileProvider>
      <RouterComponent/>    
    </ProfileProvider>
  );
};
