import React from "react";
import { useParams } from "react-router-dom";
//TODO:quitar la palabra MEMBERS... solo tratamos la org aqui
interface OrganizationContext {
  currentOrgName: string;
  searchNewOrg: (orgName: string) => void;
}

const createEmptyOrg = (): OrganizationContext => ({
  currentOrgName: "",
  searchNewOrg: (_orgName) => {
    console.log("Hey: Provider must be used!");
  },
});

export const orgContext = React.createContext<OrganizationContext>(
  createEmptyOrg()
);

export const OrgContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { urlOrganization } = useParams();
  const [organizationName, setOrganizationName] = React.useState(
    urlOrganization ?? "lemoncode"
  );
  const context = orgContext;
  return (
    <context.Provider
      value={{
        currentOrgName: organizationName,
        searchNewOrg: setOrganizationName,
      }}
    >
      {children}
    </context.Provider>
  );
};
