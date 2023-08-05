import React from "react";
import SelectMui, {SelectProps} from "@mui/material/Select"

interface Props extends SelectProps{
  children?: React.ReactNode,
}

export const Select:React.FC<Props> = (props:Props)=>{
  const {children, ...rest} = props;
  return(
    <SelectMui {...rest}>
      {children}
    </SelectMui>
  )
}
