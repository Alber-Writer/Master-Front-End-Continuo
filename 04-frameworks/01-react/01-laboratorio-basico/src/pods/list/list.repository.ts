import { getMembersbyOrg as am } from "./api/api";
import { mapAMCollectionToMemberEntityVM } from "./list.mapper";
import { MemberEntityVM } from "./list.vm";

export const getMembersbyOrg = (orgName: string): Promise<MemberEntityVM[]> =>
  am(orgName).then((json) => mapAMCollectionToMemberEntityVM(json));
