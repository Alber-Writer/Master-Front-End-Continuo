import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { routes, profileContext } from "@/core";

import { setCacheLogin } from "@/core/profile/profile-business/profile-cache";

import classes from "./login.styles.css";
import { checkAuth } from "./api/check-auth";
import { useCredentials } from "./hooks/use-credentials.hooks";

interface Props {
  children?: React.ReactNode,
}

export const LoginComponent: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { username, setUsername, password, setPassword } = useCredentials();
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
            /(^\/$)|(^$)/.test(currentPath) ? routes.list("lemoncode") : currentPath
          );
        } else {
          alert("User / password not valid, psst... admin / test");
          setIsLoading(false);
        }
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className={classes.title}>Hello from login page</h2>

      <div>
        <div>
          <label>Username: </label>
          <input
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            autoComplete="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Login</button>
      {isLoading && `...Checking data...`}
    </form>
  );
};
