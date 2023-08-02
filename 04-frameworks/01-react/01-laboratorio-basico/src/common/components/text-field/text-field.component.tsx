import React from "react";
import TextFieldMui, {TextFieldProps} from "@mui/material/TextField";

export const TextField:React.FC<TextFieldProps> = (props:TextFieldProps)=>{
  const { ...rest} = props;
  return (<TextFieldMui {...rest} />)
}