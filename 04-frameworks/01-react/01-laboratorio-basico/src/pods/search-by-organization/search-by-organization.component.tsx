import React from "react";
import { useParams } from "react-router-dom";
import { useOrgName } from "@/common/hooks";


interface Props{
  children?: React.ReactNode;
  handleSearch : (organizationName: string)=>void;
}


export const SearchByOrganization:React.FC<Props> = (props:Props)=>{
  const {handleSearch} = props;
  const {organizationName, setOrganizationName} = useOrgName();
  const { urlOrganization } = useParams();
  React.useEffect(() => {
    handleSearch(urlOrganization);
  }, []);
  return(<>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSearch(organizationName);
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