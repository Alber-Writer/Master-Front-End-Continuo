import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useOrganizationName } from "@/common/hooks";


interface Props{
  children?: React.ReactNode;
  sendDataToFatherFN : (organizationName: string)=>void;
}


export const SearchByOrganization:React.FC<Props> = (props:Props)=>{
  const {sendDataToFatherFN} = props;
  const {organizationName, setOrganizationName} = useOrganizationName();
  const { urlOrganization } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    sendDataToFatherFN(urlOrganization);
    navigate(`/list/${organizationName}`);
  }, []);
  return(<>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          sendDataToFatherFN(organizationName);
        }}
        className="org-search"
      >
        <label>Organization: </label>
        <input
          type="text"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
  </>)
}