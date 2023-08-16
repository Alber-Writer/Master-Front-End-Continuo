import catsJson from "./cats-imgs-api.json";
import kittenJson from "./kitten-imgs-api.json";
import { PictureEntityAM } from "./product-page.api.model";


export const PictureApi = async (category: string): Promise<PictureEntityAM[]> => {
  return await fetch(`http://localhost:3000/${category ?? "cats"}`)
  .then((response) => {
    if(response.ok) return response.json()
    throw new Error('Error fetching member detail')
  }
  )
};
