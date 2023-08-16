import { PictureEntityVM } from "./product-page.vm"
import { PictureEntityAM } from "./api/product-page.api.model"


const mapApiModelToPictureEntityVM = (picture:PictureEntityAM):PictureEntityVM=>({
  id: picture.id,
  picUrl: picture.picUrl,
  title: picture.title,
})


export const mapAMPicturesToPicturesEntityVM = (
  pictures: PictureEntityAM[]
): PictureEntityVM[] => pictures.map(mapApiModelToPictureEntityVM);