import React from "react";

import { Box, Header } from "@/common/components";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { ButtonsBar } from "./components/buttons-bar";

interface Props {
  children?: React.ReactNode;
  asideComponent: React.ReactNode;
  asideTitle?: string;
}

export const MainAndAsideLayout: React.FC<Props> = (props: Props) => {
  const { children, asideComponent, asideTitle } = props;
  const [asideIsVisible, setAsideIsVisible] = React.useState<boolean>(true);
  const { primary, secondary } = useTheme().palette;
  const onClickButtonBarHandler = () => setAsideIsVisible(!asideIsVisible);
  return (
    <Box
      width="100%"
      display="flex"
      flexWrap={"wrap"}
      height="100vh"
      gap={0}
      overflow={"hidden"}
      alignContent="stretch"
    >
      <Box width={"100%"} height={"64px"}>
        <Header />
      </Box>

      <Box
        component='div'
        width={"100%"}
        display="flex"
        height="calc(100vh - 64px)"
        maxHeight={"92vh"}
        alignContent={"stretch"}
        flexGrow={1}
        borderTop={`3px solid ${secondary.main}`}
      >
        {/* MAIN */}
        <Box
          component='main'
          padding="1rem"
          flexGrow={1}
          sx={{
            overflowY: "auto",
          }}
        >
          {children}
        </Box>

        {/* ASIDE */}
        <Box
          component='aside'
          display="flex"
          flexDirection="row"
          width={asideIsVisible ? "35%" : "50px"}
          sx={{
            transition: "all 500ms ease-in-out",
            transform: `translateX(${
              asideIsVisible ? "0" : "calc(100% - 50px)"
            })`,
          }}
        >
          <ButtonsBar onBtnClick={onClickButtonBarHandler} />

          {/* Content of aside */}
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="stretch"
            alignContent="center"
            borderLeft={`4px solid ${secondary.main}`}
            bgcolor={primary.light}
            width={"100%"}
            overflow={"hidden"}
          >
            {asideTitle && (
              <Typography
                variant="h6"
                fontWeight={600}
                color={primary.light}
                bgcolor={secondary.main}
                minWidth={"100%"}
                padding=".55rem"
                height={"50px"}
                borderBottom={`3px solid ${secondary.main}`}
              >
                {asideTitle}
              </Typography>
            )}
            {asideComponent}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
