import React from "react";
import styled from "styled-components";

const MemberCardWrapper = styled.div`
  /* border: 1px solid green; */
  background-color: lightgray;
  margin: 0.3rem;
  height: 20vh;
  display: grid;
  grid-template-columns: 25% auto;
  padding: 0.5rem;
`;

const CardImageWrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 10px;
  padding: 10px;
  /* object-fit: cover; */
  img {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    /* margin-right: 0.5rem; */
  }
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
      <CardImageWrapper>
        <img src={props.photo} alt={"photo of" + props.name} />
      </CardImageWrapper>
      <CardTextWrapper>
        <h4>
          {props.name}&nbsp;({props.role})
        </h4>
        <span>Mobile: {props.mobile}</span> <br />
        <span>Email: {props.email}</span>
      </CardTextWrapper>
    </MemberCardWrapper>
  );
};

export default MemberCard;
