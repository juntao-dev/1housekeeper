import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Bar = styled.div`
  background: white;
  width: 100vw;
  padding: 0.5rem;
  top: 0;
  position: fixed;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2rem;
`;

const LogoWrapper = styled.div`
  font-weight: bold;
`;

const NavButtonGroupWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const NavButtonWrapper = styled.div`
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Bar>
      <LogoWrapper>
        <Link to="/">
          <span>1houseKeeper</span>
        </Link>
      </LogoWrapper>
      <NavButtonGroupWrapper>
        <NavButtonWrapper>
          <Link to="/members">Members</Link>
        </NavButtonWrapper>
      </NavButtonGroupWrapper>{" "}
    </Bar>
  );
};

export default NavBar;
