import React, { useState } from "react";
import styled from "styled-components";

import MembersList from "./MembersList";
import MembersAdmin from "./MembersAdmin";
import SampleMembers from "./SampleMembers";

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

// let currentMember = SampleMembers[0];

const MembersPage = () => {
  const [currentMember, setCurrentMember] = useState(SampleMembers[0]);
  const selectCurrentMember = id => {
    // console.log("clicked on id" + id);
    setCurrentMember(SampleMembers[id - 1]);
    console.log("current member " + JSON.stringify(SampleMembers[id - 1]));
  };

  return (
    <MembersPageWrapper>
      <MembersInfoBox>
        <MembersList currentMemberHandle={selectCurrentMember} />
      </MembersInfoBox>
      <MembersAdmin member={currentMember} />
    </MembersPageWrapper>
  );
};

export default MembersPage;
