import { PictureApi as api } from "./api/product-page.api";
import { PictureEntityVM } from "./product-page.vm";
import { mapAMPicturesToPicturesEntityVM } from "./product-page.mapper";


export const pictureApi = async(category:string):Promise<PictureEntityVM[]>=>{
  return await api(category)
  .then((json) => mapAMPicturesToPicturesEntityVM(json))
}
