import { PictureEntityAM } from "./product-page.api.model";


export const PictureApi = async (pageId: string): Promise<PictureEntityAM[]> => {
  return await fetch(`http://localhost:3000/${pageId ?? "cats"}`)
  .then((response) => {
    if(response.ok) return response.json()
    throw new Error('Error fetching member detail')
  }
  )
};
