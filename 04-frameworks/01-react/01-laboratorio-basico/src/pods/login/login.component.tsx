import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { routes,profileContext } from "@/core";

import { setCacheLogin } from "@/core/profile/profile-business/profile-cache";

import classes from "./login.styles.css";
import { checkAuth } from "./api/check-auth";


export const useCredentials = ()=>{
  const [username, setUsername] = React.useState("admin");//TODO: quit!
  const [password, setPassword] = React.useState("test");//TODO: quit!

  return({
    username,setUsername,
    password,setPassword
  })
}

interface Props{
  children?: React.ReactNode,
  //loginHandler: ()=>void
}

export const LoginComponent:React.FC<Props> = (props:Props)=>{

    const navigate = useNavigate();
    const {username,setUsername,
      password,setPassword} = useCredentials();
    // const [username, setUsername] = React.useState("admin");//TODO: quit!
    // const [password, setPassword] = React.useState("test");//TODO: quit!
    const currentPath = useLocation().pathname;
    const profContext = useContext(profileContext)
  
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      checkAuth(username, password)
    .then(response=>{
      if(response){
        setCacheLogin(true, username)
        profContext.setProfile({username, isLogged:true});
        navigate(currentPath !== "/" ? currentPath : routes.list("lemoncode"));
      }
      else{
        alert("User / password not valid, psst... admin / test")
      }
    })
    .catch(console.log)
    };

  return(
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
  </form>)
}