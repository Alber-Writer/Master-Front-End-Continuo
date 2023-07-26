import { ApiModel } from "./api/api.model";
import { MemberEntityVM } from "./list.vm";

const mapApiModelToMemberEntityVM = (member: ApiModel): MemberEntityVM => ({
  id: member.id.toString(),
  login: member.login,
  avatarUrl: member.avatar_url,
});

export const mapAMCollectionToMemberEntityVM = (
  members: ApiModel[]
): MemberEntityVM[] => members.map(mapApiModelToMemberEntityVM);
