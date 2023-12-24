import { MemberDetailEntityAM } from "./detail.api.model";

const API_USERS_URL = `https://api.github.com/users/`

export const detailApi = async (id:string):Promise<MemberDetailEntityAM>=>{ 
  return await fetch(`${API_USERS_URL + id}`)
  .then((response) => {
    if(response.ok) return response.json()
    throw new Error('Error fetching member detail')
  }
  )
}