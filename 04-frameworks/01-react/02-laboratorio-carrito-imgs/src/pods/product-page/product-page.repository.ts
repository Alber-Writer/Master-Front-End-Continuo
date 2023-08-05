import { detailApi as api } from "./api/product-page.api";
import { MemberDetailEntityVM } from "./product-page.vm";
import { mapApiModelToMemberDetailEntityVM } from "./product-page.mapper";

export const detailApi = async(id:string):Promise<MemberDetailEntityVM>=>{
  return await api(id)
  .then((json) => mapApiModelToMemberDetailEntityVM(json))
}