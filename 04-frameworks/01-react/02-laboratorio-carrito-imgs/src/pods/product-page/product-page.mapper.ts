import { MemberDetailEntityVM } from "./product-page.vm"
import { MemberDetailEntityAM } from "./api/product-page.api.model"


export const mapApiModelToMemberDetailEntityVM = (member:MemberDetailEntityAM):MemberDetailEntityVM=>({
  id: member.id.toString(),
  login: member.login,
  name: member.name,
  company: member.company,
  bio: member.bio,
  avatarUrl: member.avatar_url,
})