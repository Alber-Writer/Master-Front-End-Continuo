import { ApiModel } from "./api.model";

  export const getMembersbyOrg = (orgName: string):Promise<ApiModel[]> => {
    return fetch(`https://api.github.com/orgs/${orgName.toLowerCase()}/members`)
      .then((response) => {
        if (response.ok) return response.json();
        if (response.status === 404)
          alert(`${orgName} not found. Please enter a valid organization.`);
          return [];
      })
      .catch(() => {});
    }