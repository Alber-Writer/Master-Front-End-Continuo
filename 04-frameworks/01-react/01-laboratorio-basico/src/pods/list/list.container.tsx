import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useOrgName } from "@/common/hooks";
import { MemberEntityVM } from "./list.vm";
import { routes } from "@/core/router";

import { List } from "./list.component";
import { getMembersbyOrg } from "./list.repository";


export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntityVM[]>([]);
  const { organizationName, setOrganizationName } = useOrgName();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  React.useEffect(()=>{
    if(/(^\/$)|(^$)/.test(currentPath)){
      navigate(routes.list(organizationName));
    }
  }, [organizationName])

  const handleSearch = (orgName: string = organizationName) => {
    getMembersbyOrg(orgName)
      .then((members) => {
        setOrganizationName(orgName);
        navigate(routes.list(orgName));
        setMembers(members);
      })
      .catch(() => {});
  };

  return (
    <>
      <List
        members={members}
        organizationName={organizationName ?? "lemoncode"}
        setDataHandler={handleSearch}
      />
    </>
  );
};

//TODO: add MUI
//History api fallback @webpack... not running