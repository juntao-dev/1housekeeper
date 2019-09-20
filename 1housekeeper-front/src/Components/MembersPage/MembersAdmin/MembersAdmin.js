import React from "react";
import styled from "styled-components";

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

const MembersAdmin = props => {
  return (
    <MembersAdminWrapper>
      {/* <MembersAdminCard>New Member</MembersAdminCard>
      <MembersAdminCard>Message Everyone</MembersAdminCard> */}
      <form>
        <label for="name">Name</label>
        <input id="name" type="text"></input>
      </form>
    </MembersAdminWrapper>
  );
};

export default MembersAdmin;
