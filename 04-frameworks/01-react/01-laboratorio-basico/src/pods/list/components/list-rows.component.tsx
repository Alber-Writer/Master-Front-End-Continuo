import React from "react";
import { Link } from "react-router-dom";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemMui from "@mui/material/ListItem";
import ListItemTextMui from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import LinkMui from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import { MemberEntityVM } from "@/pods/list/list.vm";
import { Avatar } from "@/common/components/avatar";
import { routes } from "@/core/router";
import { useOrgName } from "@/common/hooks";

interface Props {
  children?: React.ReactNode;
  listToRender: MemberEntityVM[];
}
export const ListRows: React.FC<Props> = (props: Props) => {
  const { currentOrgName } = useOrgName();
  const { listToRender } = props;
  return (
    <Stack spacing={3} padding={1}>
      {listToRender.map((member) => (
        <LinkMui
          component={Link}
          to={routes.details(currentOrgName, member.login)}
          underline="none"
          display="flex"
          justifyContent="stretch"
          key={member.login}
        >
          <Card sx={{ width: "100%" }}>
            <CardActionArea>
              <ListItemMui key={member.id} sx={{ width: "100%" }}>
                <ListItemAvatar sx={{ marginRight: "1rem" }}>
                  <Avatar
                    src={member.avatarUrl}
                    sx={{ width: 70, height: 70 }}
                  />
                </ListItemAvatar>
                <ListItemTextMui
                  primary={member.login}
                  secondary={`ID: ${member.id}`}
                />
              </ListItemMui>
            </CardActionArea>
          </Card>
        </LinkMui>
      ))}
    </Stack>
  );
};
