import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Bar = styled.div`
  background: white;
  width: 100vw;
  padding: 0.5rem;
  top: 0;
  position: fixed;
`;

const NavBar = () => {
  return (
    <Bar>
      <Link to="/">
        <span>1houseKeeper</span>
      </Link>
    </Bar>
  );
};

export default NavBar;
