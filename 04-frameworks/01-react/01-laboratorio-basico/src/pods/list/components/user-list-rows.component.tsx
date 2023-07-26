import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core/router";
import { MemberEntityVM } from "@/pods/list/list.vm";

interface Props {
  children?: React.ReactNode;
  listToRender: MemberEntityVM[];
  organization: string;
}
export const UserListRows: React.FC<Props> = (props: Props) => {
  const { listToRender, organization } = props;
  return (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {listToRender.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <Link to={routes.details(organization, member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
