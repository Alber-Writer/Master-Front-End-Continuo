import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { profileContext, routes } from "@/core";
import { removeCacheLogin } from "@/core/profile/profile-business/profile-cache";


export const Header:React.FC = ()=>{
  const profContext = useContext(profileContext);
  const navigate = useNavigate()
  const logout = ()=>{
    removeCacheLogin();
    profContext.setProfile({username:"", isLogged:false});
    navigate(routes.root)
  };
  return(<>
  Hello! {profContext.profile.username}, at this moment your loggin status is: {profContext.profile.isLogged ? `Logged` : `Unlogged`}
  <div onClick={logout}>Logout</div>
  </>)
}
