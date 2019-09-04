import React from "react";
import styled from "styled-components";

const sampleData = {
  name: "Tom Jones",
  role: "Father"
};

const MemberCardWrapper = styled.div`
  background-color: lightgray;
  margin: 1rem;
  width: 50vw;
  height: 20vh;
  display: grid;
  grid-template-columns: 25% auto;
  padding: 0.5rem;
`;

const CardImageWrapper = styled.div`
  background-image: url("https://img.icons8.com/plasticine/100/000000/user.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  margin-right: 0.5rem;

  /* border: 1px solid red; */
`;

const CardTextWrapper = styled.div`
  margin-left: 0.5rem;
  background-color: whitesmoke;
  padding: 0.5rem;

  /* border: 1px solid green; */
`;

const MemberCard = props => {
  return (
    <MemberCardWrapper>
      <CardImageWrapper></CardImageWrapper>
      <CardTextWrapper>
        <h4>
          {sampleData.name}&nbsp;({sampleData.role})
        </h4>
        <span>Mobile: 0453228943</span> <br />
        <span>Email: tim.jones@email.com</span>
      </CardTextWrapper>
    </MemberCardWrapper>
  );
};

export default MemberCard;
