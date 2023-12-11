import React from "react";
import ButtonMui, {ButtonProps} from "@mui/material/Button";

interface Props extends ButtonProps{
  onClick?:()=>void
}

export const Button:React.FC<Props> = (props:Props)=>{
  const {children, onClick, ...rest} = props;
  return (<ButtonMui onClick={onClick} {...rest}>{children}</ButtonMui>)
}