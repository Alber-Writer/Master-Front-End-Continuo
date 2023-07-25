import React from "react";

import { LoginLayout } from "@/layout";
import { LoginContainer } from "@/pods";

interface Props{
  children?: React.ReactNode;
}

export const LoginScene: React.FC<Props> = (props:Props) => {
  return (
    <LoginLayout>
      <LoginContainer />
    </LoginLayout>
  );
};
