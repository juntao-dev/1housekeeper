import React, { useState } from "react";
import styled from "styled-components";

import MembersList from "./MembersList";
import MembersAdmin from "./MembersAdmin";
import SampleMembers from "./SampleMembers";

// const appMembers = SampleMembers;

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
  const [appMembers, setAppMembers] = useState(SampleMembers);

  const selectCurrentMember = id => {
    setCurrentMember(SampleMembers[id - 1]);
    console.log("current member " + JSON.stringify(SampleMembers[id - 1]));
  };
  const updateMemberDetails = member => {
    let newList = appMembers;
    newList[member.id - 1] = member;

    setAppMembers(newList);
    setCurrentMember(newList[member.id - 1]);

    console.log(appMembers);
  };

  return (
    <MembersPageWrapper>
      <MembersInfoBox>
        <MembersList
          appMembers={appMembers}
          currentMemberHandle={selectCurrentMember}
        />
      </MembersInfoBox>
      <MembersAdmin
        member={currentMember}
        updateMemberDetails={updateMemberDetails}
      />
    </MembersPageWrapper>
  );
};

export default MembersPage;
