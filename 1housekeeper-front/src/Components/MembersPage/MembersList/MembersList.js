import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MemberCard from "./MemberCard";
import SampleMembers from "../SampleMembers";

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  /* border-radius: 10px; */
`;

const MembersListWrapper = styled.div`
  display: inline-block;
  /* border: 1px solid red; */
  width: 100%;
`;

const MembersList = props => {
  let currentMemberHandle = props.currentMemberHandle;
  let appMembers = props.appMembers;
  const [members, setMembers] = useState(appMembers);
  // useEffect(setMembers(appMembers));

  const memberlisting = (appMembers, handler) =>
    members.map(member => {
      return (
        <div>
          <li
            key={member.id}
            onClick={() => {
              handler(member.id);
            }}
          >
            <MemberCard
              key={member.id}
              name={member.name}
              photo={member.photo}
              role={member.role}
              mobile={member.phone}
              email={member.email}
            />
          </li>
        </div>
      );
    });

  return (
    <MembersListWrapper>
      <ListWrapper>
        {memberlisting(appMembers, currentMemberHandle)}
      </ListWrapper>
    </MembersListWrapper>
  );
};

export default MembersList;
