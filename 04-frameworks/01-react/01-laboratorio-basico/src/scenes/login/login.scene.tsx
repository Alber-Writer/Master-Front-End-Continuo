import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routes,profileContext } from "@/core";

export const LoginScene: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("admin");//TODO: quit!
  const [password, setPassword] = React.useState("test");//TODO: quit!
  const currentPath = useLocation().pathname;
  const profContext = useContext(profileContext)

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      profContext.setProfile({username, isLogged:true});
      navigate(currentPath !== "/" ? currentPath : routes.list("lemoncode"));
      alert(profContext.profile.isLogged);
    } else {
      return alert("User / password not valid, psst... admin / test");
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
