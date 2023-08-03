import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core/router";
import { MemberEntityVM } from "@/pods/list/list.vm";
import { Avatar } from "@/common/components/avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListMui from "@mui/material/ListItem";
import ListItemMui from "@mui/material/ListItem";
import ListItemTextMui from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import LinkMui from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  children?: React.ReactNode;
  listToRender: MemberEntityVM[];
  backLinkParentKey: string;
}
export const ListRows: React.FC<Props> = (props: Props) => {
  const { listToRender, backLinkParentKey } = props;
  return (
    <Stack spacing={3} padding={1} >
      {listToRender.map((member) => (
        <LinkMui
          component={Link}
          to={routes.details(backLinkParentKey, member.login)}
          underline="none"
          sx={{display: "flex", justifyContent:"strech"}}
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
                  primary={<LinkMui>{member.login}</LinkMui>}
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
