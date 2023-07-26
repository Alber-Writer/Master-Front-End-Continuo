import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PaginateFetchedCollection } from "@/common/components/";
import { SearchByOrganization } from "@/pods";
import { MemberEntityVM } from "./list.vm";


interface Props {
  members: MemberEntityVM[];
  organizationName: string;
  setDataHandler: (orgName: string) => void;
}

export const List: React.FC<Props> = (props: Props) => {
  const { members, setDataHandler, organizationName } = props;
  return (
    <>
      <h2>Github users list per Organization</h2>
      <SearchByOrganization handleSearch={setDataHandler} />

      <PaginateFetchedCollection
        items={members}
        organizationName={organizationName}
      ></PaginateFetchedCollection>
    </>
  );
};
