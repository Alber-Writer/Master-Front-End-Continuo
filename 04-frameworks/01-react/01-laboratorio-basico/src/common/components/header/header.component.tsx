import React, { useContext } from "react";
import { profileContext } from "@/core";


export const Header:React.FC = ()=>{
  const profContext = useContext(profileContext);
  return(<>
  Hello! {profContext.profile.username}, at this moment your loggin status is: {profContext.profile.isLogged ? `Logged` : `Unlogged`}
  </>)
}
