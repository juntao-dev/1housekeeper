import React from "react";
import styled from "styled-components";
import SampleMembers from "./SampleMembers";

const ListWrapper = styled.div``;

const memberlisting = SampleMembers.map(member => {
  return <li key={member.id}>{member.name}</li>;
});

const MembersList = props => {
  return (
    <ListWrapper>
      <ul>{memberlisting}</ul>
    </ListWrapper>
  );
};

export default MembersList;
