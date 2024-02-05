import React from "react";
import { PaginateList } from "@/common/components/";
import { useOrgMembers } from "./hooks/use-org-members.hook";
import { SearchByOrganization } from "@/pods/search-by-organization";
import { ListRows } from "./components/list-rows.component";
import { MemberEntityVM } from "./list.vm";

interface Props {
  children?: React.ReactNode;
}

export const List: React.FC<Props> = (props: Props) => {
  const { membersList } = useOrgMembers();
  return (
    <>
      <h2>GitHub members list per Organization (displaying first 30)</h2>
      <SearchByOrganization />

      <PaginateList
        itemsList={membersList}
        RowDisplayerComponent={(item: MemberEntityVM) => (
          <ListRows member={item} key={item.id}></ListRows>
        )}
      ></PaginateList>
    </>
  );
};
