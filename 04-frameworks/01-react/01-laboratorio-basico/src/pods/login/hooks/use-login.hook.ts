import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { routes, profileContext } from "@/core";
import { setCacheLogin } from "@/core/profile/profile-business/profile-cache";

import { checkAuth } from "../api/check-auth";

type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export const useLogin = () => {
  const [username, setUsername] = React.useState("admin");
  const [password, setPassword] = React.useState("test");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const currentPath = useLocation().pathname;
  const profContext = useContext(profileContext);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    checkAuth(username, password)
      .then((response) => {
        if (response) {
          setCacheLogin(true, username);
          profContext.setProfile({ username, isLogged: true });
          navigate(
            /(^\/$)|(^$)/.test(currentPath)
              ? routes.list("lemoncode")
              : currentPath
          );
        } else {
          alert("User / password not valid, psst... admin / test");
          setIsLoading(false);
        }
      })
      .catch(console.log);
  };
  const handleUsername = (
    e: InputEvent
  ) => setUsername(e.target.value);
  const handlePassword = (
    e: InputEvent
  ) => setPassword(e.target.value);

  return { handleLogin, handleUsername, handlePassword, username, password, isLoading};
};
