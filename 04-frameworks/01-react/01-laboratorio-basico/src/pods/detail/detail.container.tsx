import React from "react";
import { Link, useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { detailApi } from "./detail.repository";
import { MemberDetailEntityVM } from "./detail.vm";

const createDefaultMemberDetail = ():MemberDetailEntityVM => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  avatarUrl: "",
});

export const DetailContainer:React.FC = ()=>{
  const [member, setMember] = React.useState<MemberDetailEntityVM>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();
  const { urlOrganization } = useParams();

  React.useEffect(() => {
    detailApi(id)
      .then((json) => setMember(json))
      .catch(()=>{});
  }, []);
  return(<DetailComponent member={member} urlOrganization={urlOrganization} id={id}/>)
}