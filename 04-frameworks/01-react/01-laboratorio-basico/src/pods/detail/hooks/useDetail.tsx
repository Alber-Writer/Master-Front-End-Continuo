import React from "react";
import { useParams } from "react-router-dom";
import { detailApi } from "../detail.repository";
import { MemberDetailEntityVM } from "../detail.vm";


const createDefaultMemberDetail = ():MemberDetailEntityVM => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  avatarUrl: "",
});

export const useDetail = ()=>{
  const [member, setMember] = React.useState<MemberDetailEntityVM>(
    createDefaultMemberDetail()
  );
  const { id, urlOrganization } = useParams();

  React.useEffect(() => {
    detailApi(id)
      .then((json) => setMember(json))
      .catch(()=>{});
  }, []);

  return {member, id, urlOrganization}
}