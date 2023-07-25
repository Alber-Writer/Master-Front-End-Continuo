import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PaginateFetchedCollection } from "@/common/components/";
import { SearchByOrganization } from "@/pods/";
import { useOrganizationName } from "@/common/hooks";
import { MemberEntity } from "./model";
import { Button } from "@/components/button";
import { routes } from "@/core/router";
import { MainLayout } from "@/layout";

export const ListScene: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {organizationName, setOrganizationName} = useOrganizationName();
  const navigate = useNavigate();


  const handleSearch = (orgName: string) => {
    fetch(`https://api.github.com/orgs/${orgName.toLowerCase()}/members`)
      .then((response) => {
        if(response.ok) return response.json();
         if(response.status === 404) alert(`${orgName} not found. Please enter a valid organization.`)
          throw new Error("Error fetching members");
      })
      .then(json=> {
        setOrganizationName(orgName);
        // navigate(`/list/${orgName}`)
        navigate(routes.list(orgName))
        return setMembers(json)})
      .catch(() => {});
  };
  return (
    <MainLayout>
      <h2>Github users list per Organization</h2>
      <SearchByOrganization sendDataToFatherFN={handleSearch}/>

      <PaginateFetchedCollection
        members={members}
        organizationName={organizationName}
      ></PaginateFetchedCollection>
      <Button onClick={()=>alert('maclickao!!')}>Click</Button>
    </MainLayout>
  );
};

//TODO: add MUI - check roboto font
//History api fallback @webpack... not running
