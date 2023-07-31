import React from "react";

export const useCredentials = () => {
  const [username, setUsername] = React.useState("admin"); //TODO: quit!
  const [password, setPassword] = React.useState("test"); //TODO: quit!
  return {
    username,
    setUsername,
    password,
    setPassword,
  };
};