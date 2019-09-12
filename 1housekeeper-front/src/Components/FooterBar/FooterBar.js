import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 100%;
  padding: 10px;
  background: white;
  text-align: left;
  position: fixed;
  bottom: 0;
`;

const FooterBar = props => {
  return <FooterBox>&copy; 1houseKeeper 2019</FooterBox>;
};

export default FooterBar;
