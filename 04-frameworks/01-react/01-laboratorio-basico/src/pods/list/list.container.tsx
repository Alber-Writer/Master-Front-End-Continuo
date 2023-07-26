import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useOrgName } from "@/common/hooks";
import { MemberEntityVM } from "./list.vm";
import { routes } from "@/core/router";

import {List} from "./list.component"
import { getMembersbyOrg } from "./list.repository";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntityVM[]>([]);
  const { organizationName, setOrganizationName } = useOrgName();
  const navigate = useNavigate();

  const handleSearch = (orgName: string) => {
    getMembersbyOrg(orgName)
      .then((members) => {
        setOrganizationName(orgName);
        navigate(routes.list(orgName));
        setMembers(members);
      })
      .catch(() => {});
  };
  return (<>
    <List members={members}
    organizationName={organizationName}
    setDataHandler={handleSearch}/>
    </>
  );
};

//TODO: add MUI
//History api fallback @webpack... not running


