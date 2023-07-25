import React from "react";


interface Props{
  children?:React.ReactNode,
}

export const LoginLayout:React.FC<Props> = (props:Props)=>{
  return(<>
  {props.children}
  </>)
}