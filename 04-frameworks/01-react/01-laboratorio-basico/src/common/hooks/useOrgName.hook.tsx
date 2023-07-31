import React from "react";
import { useParams } from "react-router-dom";

export const useOrgName = () => {
  const { urlOrganization = "lemoncode" } = useParams();
  const [organizationName, setOrganizationName] =
    React.useState(urlOrganization);
  return { organizationName, setOrganizationName };
};
