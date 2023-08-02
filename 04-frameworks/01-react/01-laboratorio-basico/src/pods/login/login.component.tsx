import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { routes, profileContext } from "@/core";
import { setCacheLogin } from "@/core/profile/profile-business/profile-cache";

import { checkAuth } from "./api/check-auth";
import { useCredentials } from "./hooks/use-credentials.hooks";

import classes from "./login.styles.css";
import { Button } from "@/common/components";
import { TextField } from "@/common/components";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

interface Props {
  children?: React.ReactNode;
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

  return (
      <Paper elevation={3} sx={{padding:"2rem",maxWidth:360, maxHeight:400}}>
        <form onSubmit={handleLogin}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <h2 className={classes.title}>Login</h2>
            <TextField
              label="Username"
              variant="standard"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button variant="contained" type="submit">
                Login
              </Button>
            )}
          </Stack>
        </form>
      </Paper>
  );
};

// TODO: manage css error fields
