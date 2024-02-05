import React, { FormEventHandler } from "react";

import Button from "@mui/material/Button";

import { useOrgName } from "@/common/hooks";
import { Box } from "@/common/components/box";
import { TextField } from "@/common/components/text-field";

interface Props {
  children?: React.ReactNode;
}

export const SearchByOrganization: React.FC<Props> = (props: Props) => {
  const { currentOrgName, setNewOrganization, triggerOrgSearch } = useOrgName();
  const [newOrg, setNewOrg] = React.useState(currentOrgName)

  const handleSubmit:FormEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    setNewOrganization(newOrg)
    triggerOrgSearch();
  }
  const handleSelectorChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNewOrg(e.target.value)
  return (
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        justifyContent="space-evenly"
        margin="2rem auto"
        minWidth={360}
      >
        <TextField
          label="Organization"
          type="text"
          value={newOrg}
          onChange={handleSelectorChange}
          size="small"
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Box>
  );
};
