import React from 'react'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(0, 32, 48, 1)',
    },
    secondary: {
      main: 'rgba(68, 196, 175, 1)',
    },
    info: {
      main: 'rgba(217, 252, 186, 1)',
    },
    success: {
      main: 'rgba(153, 234, 162, 1)',
    },
    warning: {
      main: 'rgba(153, 234, 162, 1)',
    },
    divider: 'rgba(47,64,76,0.12)',
  },
};

export const customTheme = createTheme(themeOptions);

interface Props{
  children?:React.ReactNode
}

export const CustomThemeProvider:React.FC<Props> = (props:Props)=> {
  return <ThemeProvider theme={customTheme}>
    {props.children}
  </ThemeProvider>;
}
