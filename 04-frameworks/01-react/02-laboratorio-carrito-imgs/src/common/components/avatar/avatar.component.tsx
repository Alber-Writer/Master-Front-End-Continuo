import React from "react";
import AvatarMui, {AvatarProps} from "@mui/material/Avatar"

interface Props extends AvatarProps{
}

export const Avatar:React.FC<Props> = (props:Props)=>{
  const {...rest} = props;
  return(
    <AvatarMui {...rest}/>
  )
}