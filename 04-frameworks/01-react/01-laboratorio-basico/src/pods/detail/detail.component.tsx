import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntityVM } from "./detail.vm";

interface Props{
  member: MemberDetailEntityVM,
  urlOrganization: string,
  id:string
}

export const DetailComponent:React.FC<Props> = (props:Props)=>{
  const {member, urlOrganization, id} = props;
  return(<>
  <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={`/list/${urlOrganization}`}>Back to list page</Link>
  </>)
}