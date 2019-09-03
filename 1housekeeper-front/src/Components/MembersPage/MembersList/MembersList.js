import React from "react";
import styled from "styled-components";
import SampleMembers from "./SampleMembers";
import MemberCard from "./MemberCard";

const ListWrapper = styled.div``;

const memberlisting = SampleMembers.map(member => {
  return <li key={member.id}>{member.name}</li>;
});

const MembersList = props => {
  return (
    <div>
      <ListWrapper>
        <ul>{memberlisting}</ul>
      </ListWrapper>
      <MemberCard />
    </div>
  );
};

export default MembersList;
