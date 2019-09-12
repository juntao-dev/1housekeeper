import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavCardWrapper = styled.div`
  /* border: 1px solid orange; */
  width: 20vw;
  /* height: 100%; */
  margin: 10px;
  display: grid;
  cursor: pointer;
  grid-template-rows: 80% auto;

  /* a {
    width: 100%;
    height: 100%;
  } */
`;

const NavCardImageWrapper = styled.div`
  /* border: 1px solid green; */
  img {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    /* margin-right: 0.5rem; */
  }
`;

const NavCardLabelWrapper = styled.div`
  /* border: 1px solid darkmagenta; */
  font-weight: bold;
  padding: 0.3rem;
`;

const NavCard = props => {
  return (
    <NavCardWrapper>
      <NavCardImageWrapper>
        <img src={props.image} alt="members" />
      </NavCardImageWrapper>

      <NavCardLabelWrapper>{props.label}</NavCardLabelWrapper>
    </NavCardWrapper>
  );
};

export default NavCard;
