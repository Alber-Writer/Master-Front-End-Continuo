import { orgContext } from "@/core/org-context";
import { routes } from "@/core/router";
import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useOrgName = () => {
  const {currentOrgName, searchNewOrg} = useContext(orgContext)
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  
  const testOrgPath = (org:string)=>{
    if (/(^\/$)|(^$)/.test(currentPath)) {
      navigate(routes.list(org));//TODO: no le veo mucho sentido... si vacio q navegue¿?
    }
  }
  const setNewOrganization = (org: string) => {
    searchNewOrg(org)
  };
  const triggerOrgSearch = ()=>{
    navigate(routes.list(currentOrgName))
  }
  return {  currentOrgName, setNewOrganization, testOrgPath, triggerOrgSearch };
};
