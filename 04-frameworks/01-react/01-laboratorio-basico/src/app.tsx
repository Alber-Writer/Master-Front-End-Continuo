import React from "react";

import { ProfileProvider, RouterComponent } from "@/core";

export const App = () => {
  return (
    <ProfileProvider>
      <RouterComponent/>    
    </ProfileProvider>
  );
};
