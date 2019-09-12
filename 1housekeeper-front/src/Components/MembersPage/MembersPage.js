import React from "react";
import styled from "styled-components";

import MembersList from "./MembersList";

const MembersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 50vw;
`;

const MembersInfoBox = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
`;

const MembersPage = () => {
  return (
    <MembersPageWrapper>
      <div>Group</div>
      <MembersInfoBox>
        <MembersList />
      </MembersInfoBox>
    </MembersPageWrapper>
  );
};

export default MembersPage;
