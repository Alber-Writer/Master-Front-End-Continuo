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

import LinkMui from '@mui/material/Link'

interface Props {
  children?: React.ReactNode;
  listToRender: MemberEntityVM[];
  backLinkParentKey: string;
}
export const ListRows: React.FC<Props> = (props: Props) => {
  const { listToRender, backLinkParentKey } = props;
  return (
    <Stack>
      {listToRender.map((member) => (
        <ListItemMui key={member.id} sx={{ maxWidth: 360}}>
          <ListItemAvatar sx={{marginRight:"1rem"}}>
              <Avatar src={member.avatarUrl} sx={{ width: 70, height: 70 }} />
          </ListItemAvatar>              
          <ListItemTextMui
            primary={
              <LinkMui component={Link} to={routes.details(backLinkParentKey, member.login)}>
                {member.login}
              </LinkMui>
            }
            secondary={`ID: ${member.id}`}
          />
        </ListItemMui>
      ))}
    </Stack>
  );
};
