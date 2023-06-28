
import React from "react";
import ButtonMui, {ButtonProps} from "@mui/material/Button";

interface Props extends ButtonProps{
  onClick?:()=>void
}
export const Button:React.FC<Props> = (props:Props)=>{
  const {children, ...rest} = props;
  return (<ButtonMui {...rest}>{children}</ButtonMui>)//TODO: escribe sobre esto, es importante
}