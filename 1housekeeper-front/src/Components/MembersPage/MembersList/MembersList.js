import React from "react";
import styled from "styled-components";
import SampleMembers from "./SampleMembers";
import MemberCard from "./MemberCard";

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MmebersListWrapper = styled.div`
  display: inline-block;
  /* border: 1px solid red; */
  width: 100%;
`;

const memberlisting = SampleMembers.map(member => {
  return (
    <div>
      <li key={member.id}>
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

const MembersList = props => {
  return (
    <MmebersListWrapper>
      <ListWrapper>{memberlisting}</ListWrapper>
    </MmebersListWrapper>
  );
};

export default MembersList;
