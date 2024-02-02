import React from "react";
import { PaginateCollection } from "@/common/components/";
import { useOrgMembers } from "./hooks/use-org-members.hook";
import { SearchByOrganization } from "@/pods/search-by-organization";

interface Props {
  children?: React.ReactNode;
}

export const List: React.FC<Props> = (props: Props) => {
  const { currentOrg, membersList } = useOrgMembers();
  return (
    <>
      <h2>GitHub members list per Organization (displaying first 30)</h2>
      <SearchByOrganization />

      <PaginateCollection
        items={membersList as []} //TODO: revisar esto del AS
        backLinkParentKey={currentOrg}
      ></PaginateCollection>
    </>
  );
};
