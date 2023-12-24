import React from "react";
import { DetailComponent } from "./detail.component";
import { useDetail } from "./hooks/useDetail";

export const DetailContainer:React.FC = ()=>{
  const {member, id, urlOrganization} = useDetail();
  return(<DetailComponent member={member} urlOrganization={urlOrganization} id={id}/>)
}