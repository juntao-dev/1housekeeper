import React from "react";
import styled from "styled-components";
import NewMemberForm from "./NewMemberForm";

const MembersAdminWrapper = styled.div`
  /* border: 1px solid blue; */
  border-radius: 5px;
  background-color: whitesmoke;
  margin: 10px;
  text-align: center;
  padding-top: 20px;
  /* margin-bottom: 10%; */
`;

const MembersAdminCard = styled.div`
  /* border: 1px solid green; */
  background-color: #ffa726;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  width: 50%;
  padding: 10px;
  margin-top: 10px;
`;

const sampleMember = {
  name: "Jon Snow",
  role: "Flat Mate",
  mobile: "0423552183",
  email: "jonsnow@example.com",
  profile: "www.image.com/profile.jpg",
  rent: "300"
};

const MembersAdmin = props => {
  return (
    <MembersAdminWrapper>
      <NewMemberForm member={props.member} />
      {/* <MembersAdminCard>New Member</MembersAdminCard>
      <MembersAdminCard>Message Everyone</MembersAdminCard> */}
    </MembersAdminWrapper>
  );
};

export default MembersAdmin;
