import { ApiModel } from "./api.model";

const API_ORGS_URL = 'https://api.github.com/orgs/';

  export const getMembersbyOrg = (orgName: string):Promise<ApiModel[]> => {
    return fetch(`${ API_ORGS_URL + orgName}/members`)
      .then((response) => {
        if (response.ok) return response.json();
        if (response.status === 404)
          alert(`${orgName} organization not found. Please enter a valid organization.`);
          return [];
      })
      .catch((e) => {console.log(e);
      });
    }