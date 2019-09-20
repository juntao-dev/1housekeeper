import React from "react";
import styled from "styled-components";

import MembersList from "./MembersList";
import MembersAdmin from "./MembersAdmin";

const MembersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 50vw;
  height: 90vh;
`;

const MembersInfoBox = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MembersAdminBox = styled.div`
  text-align: center;
  height: 100%;
  overflow: hidden;
`;

const MembersPage = () => {
  return (
    <MembersPageWrapper>
      <MembersInfoBox>
        <MembersList />
      </MembersInfoBox>
      <MembersAdmin />
    </MembersPageWrapper>
  );
};

export default MembersPage;
