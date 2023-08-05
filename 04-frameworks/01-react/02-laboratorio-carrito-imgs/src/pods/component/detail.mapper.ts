import { MemberDetailEntityVM } from "./detail.vm"
import { MemberDetailEntityAM } from "./api/detail.api.model"


export const mapApiModelToMemberDetailEntityVM = (member:MemberDetailEntityAM):MemberDetailEntityVM=>({
  id: member.id.toString(),
  login: member.login,
  name: member.name,
  company: member.company,
  bio: member.bio,
  avatarUrl: member.avatar_url,
})