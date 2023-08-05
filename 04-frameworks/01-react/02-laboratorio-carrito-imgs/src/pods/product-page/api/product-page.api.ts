import { MemberDetailEntityAM } from "./product-page.api.model";

export const detailApi = async (id:string):Promise<MemberDetailEntityAM>=>{ 
  return await fetch(`https://api.github.com/users/${id}`)
  .then((response) => {
    if(response.ok) return response.json()
    throw new Error('Error fetching member detail')
  }
  )
}