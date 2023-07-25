import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "../list/model";
import { MainLayout } from "@/layout";


const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailScene: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();
  const { urlOrganization } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => {
        if(response.ok) return response.json()
        throw new Error('Error fetching member detail')
      }
        )
      .then((json) => setMember(json))
      .catch(()=>{});
  }, []);

  return (
    <MainLayout>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={`/list/${urlOrganization}`}>Back to list page</Link>
    </MainLayout>
  );
};
