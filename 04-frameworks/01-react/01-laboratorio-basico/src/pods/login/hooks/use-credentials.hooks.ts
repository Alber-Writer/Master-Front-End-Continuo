import React from "react";

export const useCredentials = () => {
  const [username, setUsername] = React.useState("admin");
  const [password, setPassword] = React.useState("test");
  return {
    username,
    setUsername,
    password,
    setPassword,
  };
};
