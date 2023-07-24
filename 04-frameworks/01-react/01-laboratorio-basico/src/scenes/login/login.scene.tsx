import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routes } from "@/core/router";

export const LoginScene: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("admin");//TODO: quit!
  const [password, setPassword] = React.useState("test");//TODO: quit!
  const currentPath = useLocation().pathname;

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      navigate(routes.list(currentPath || "lemoncode"));
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

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
      </form>
    </>
  );
};
