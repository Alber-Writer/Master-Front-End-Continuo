import React from "react";
import classes from "./login.styles.css";
import { Button } from "@/common/components";
import { TextField } from "@/common/components";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import { useLogin } from "./hooks/use-login.hook";

interface Props {
  children?: React.ReactNode;
}

export const LoginComponent: React.FC<Props> = (props: Props) => {
const {username, password, isLoading, handleLogin, handleUsername, handlePassword} = useLogin()
  return (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", maxWidth: 360, maxHeight: 400 }}
    >
      <form onSubmit={handleLogin}>
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <h2 className={classes.title}>Login</h2>
          <TextField
            label="Username"
            variant="standard"
            autoComplete="username"
            value={username}
            onChange={handleUsername}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            autoComplete="password"
            value={password}
            onChange={handlePassword}
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