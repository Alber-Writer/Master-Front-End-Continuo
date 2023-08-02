import React from "react";
import BoxMui, {BoxProps} from "@mui/material/Box"

interface Props extends BoxProps{
}

export const Box:React.FC<Props> = (props:Props)=>{
  const {...rest} = props;
  return(
    <BoxMui {...rest}/>
  )
}