import React from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";

import { useOrgName } from "@/common/hooks";
import { Box } from "@/common/components/box";
import { TextField } from "@/common/components/text-field";

interface Props {
  children?: React.ReactNode;
  handleSearch: (organizationName: string) => void;
}

export const SearchByOrganization: React.FC<Props> = (props: Props) => {
  const { handleSearch } = props;
  const { organizationName, setOrganizationName } = useOrgName();
  const { urlOrganization } = useParams();
  React.useEffect(() => {
    handleSearch(urlOrganization);
  }, []);
  return (
      <Box
        component="form"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSearch(organizationName);
        }}
        display="flex"
        justifyContent="space-evenly"
        margin="2rem auto"
        minWidth={360}
      >
        <TextField
          label="Organization"
          type="text"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          size="small"
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Box>
  );
};
