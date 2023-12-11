import React from "react";
import { Link as RouterLink, useMatch } from "react-router-dom";
import { Button } from "@/common/components";

interface Props {
  destination: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<Props> = (props: Props) => {
  const { destination, children } = props;
  const isActive = useMatch({ path: destination, end: true }); //useMatch: null si no match, obj si sip
  return (
    <RouterLink to={destination}>
      <Button variant={isActive ? "contained" : "outlined"} color='secondary' disableElevation>{children}</Button>
    </RouterLink>
  );
};