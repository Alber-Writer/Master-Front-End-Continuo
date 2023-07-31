import { MemberDetailEntityAM } from "./detail.api.model";

export const detailApi = (id:string):Promise<MemberDetailEntityAM>=>{ 
  return fetch(`https://api.github.com/users/${id}`)
  .then((response) => {
    if(response.ok) return response.json()
    throw new Error('Error fetching member detail')
  }
  )
}