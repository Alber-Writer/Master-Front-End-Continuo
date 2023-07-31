import React from "react";
import { useParams } from "react-router-dom";

export const useOrgName = () => {
  const { urlOrganization} = useParams();
  const [organizationName, setOrganizationName] =
    React.useState(urlOrganization ?? "lemoncode");
  return { organizationName, setOrganizationName };
};
