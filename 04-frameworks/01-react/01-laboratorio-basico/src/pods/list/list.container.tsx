import React from "react";

import { OrgContextProvider } from "@/core/org-context";
import { Box } from "@/common/components/box";
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  return (
    <OrgContextProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="strech"
        padding="0.5rem"
      >
        <List />
      </Box>
    </OrgContextProvider>
  );
};
