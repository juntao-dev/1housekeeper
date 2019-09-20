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
  height: 90vh;
  overflow: scroll;
`;

const MembersPage = () => {
  return (
    <MembersPageWrapper>
      <MembersInfoBox>
        <MembersList />
      </MembersInfoBox>
      <div>Group</div>
    </MembersPageWrapper>
  );
};

export default MembersPage;
