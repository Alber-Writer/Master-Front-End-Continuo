import { detailApi as api } from "./api/detail.api";
import { MemberDetailEntityVM } from "./detail.vm";
import { mapApiModelToMemberDetailEntityVM } from "./detail.mapper";

export const detailApi = (id:string):Promise<MemberDetailEntityVM>=>{
  return api(id)
  .then((json) => mapApiModelToMemberDetailEntityVM(json))
}