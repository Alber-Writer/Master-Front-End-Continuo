import React from "react";
import { Link } from "react-router-dom";

import { MemberDetailEntityVM } from "./detail.vm";

import { Box } from "@/common/components/box";
import { Avatar } from "@/common/components/avatar";

import LinkMui from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

interface Props {
  member: MemberDetailEntityVM;
  urlOrganization: string;
  id: string;
}

export const DetailComponent: React.FC<Props> = (props: Props) => {
  const { member, urlOrganization, id } = props;
  return (
    <Box>
      <Card sx={{ padding: "2rem", margin: "2rem auto", flexBasis: "100%" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={member.avatarUrl} />
          <h2>{member.login}</h2>
        </Stack>
        <p>User Id: {id}</p>
        <p> Id: {member.id}</p>
        <p> Login: {member.login}</p>
        <p> Name: {member.name}</p>
        <p> Company: {member.company}</p>
        <p> Bio: {member.bio}</p>
      </Card>
      <LinkMui component={Link} to={`/list/${urlOrganization}`}>
        Back to list page
      </LinkMui>
    </Box>
  );
};
