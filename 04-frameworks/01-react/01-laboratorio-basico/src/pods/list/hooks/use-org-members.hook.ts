import React from "react";
import { useOrgName } from "@/common/hooks";
import { getMembersbyOrg } from "../list.repository";
import { MemberEntityVM } from "../list.vm";


export const useOrgMembers = ()=>{
  const [members, setMembers] = React.useState<MemberEntityVM[]>([]);
  const { currentOrgName, setNewOrganization, triggerOrgSearch: doSearch } = useOrgName();

  const handleSearch = (orgName: string = currentOrgName) => {
    getMembersbyOrg(orgName)
      .then((members) => {
        setNewOrganization(orgName);
        doSearch();
        setMembers(members);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  
    React.useEffect(()=>{
      handleSearch(currentOrgName)
    }, [currentOrgName])
  
  return{
    currentOrg:currentOrgName, membersList:members
  }
  
  }