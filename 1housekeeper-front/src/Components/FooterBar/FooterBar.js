import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: white;
  text-align: left;
`;

const FooterBar = (props) => {
  return (
    <FooterBox>
      &copy; 1houseKeeper 2019
    </FooterBox>
  );
}

export default FooterBar;