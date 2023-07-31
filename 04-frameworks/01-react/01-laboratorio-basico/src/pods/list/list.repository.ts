import { getMembersbyOrg as apiM } from "./api/api";
import { mapAMCollectionToMemberEntityVM } from "./list.mapper";
import { MemberEntityVM } from "./list.vm";

export const getMembersbyOrg = (orgName: string): Promise<MemberEntityVM[]> =>
  apiM(orgName).then((json) => mapAMCollectionToMemberEntityVM(json));
