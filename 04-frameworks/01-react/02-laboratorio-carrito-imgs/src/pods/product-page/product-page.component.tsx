import React from "react";
import { Link } from "react-router-dom";

import { PictureEntityVM } from "./product-page.vm";

import { Box } from "@/common/components/box";
import { Avatar } from "@/common/components/avatar";

import LinkMui from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

interface Props {
  member: PictureEntityVM;
  urlOrganization: string;
  id: string;
}

export const DetailComponent: React.FC<Props> = (props: Props) => {
  const { member, urlOrganization, id } = props;
  return (
    <Box>
      <Card sx={{ padding: "2rem", margin: "2rem auto", flexBasis: "100%" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={"member.avatarUrl"} />
          <h2>{"member.login"}</h2>
        </Stack>

      </Card>
      <LinkMui component={Link} to={`/list/${urlOrganization}`}>
        Back to list page
      </LinkMui>
    </Box>
  );
};
