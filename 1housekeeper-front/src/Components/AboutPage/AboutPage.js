import React from "react";
import styled from "styled-components";

const AboutPageWrapper = styled.div`
  /* border: 1px solid green; */
  background-color: whitesmoke;
  position: absolute;
  margin: 10px;
  width: 60vw;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  height: 85vh;
`;

const AboutPage = props => {
  return (
    <AboutPageWrapper>
      <h2>Idea</h2>
      <p>
        This SPA is a personal project built upon the simple idea of creating a
        household management application.
      </p>
      <p>
        For example, many people that share flats often have to manually keep
        track of their finances and other house keeping scheduels (e.g.
        cleaning) manually. They would need to keep track of rent payments,
        utility bill expenses etc. Using this web app, they can keep track of
        their house members and conveniently communicate with each other on
        household matters.
      </p>
      <h2>Development</h2>
      <p>
        This front-end web app is still currently under development. Some of the
        tool used include:
      </p>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Styled Component</li>
        <li>Material UI</li>
      </ul>
      <p>
        Further implementation would also include the development of a REST API
        using Node / Express.
      </p>
      <p>
        <strong>Project Code is hosted on GitHub: </strong>
        <br />
        <a href="https://github.com/juntao-dev/1housekeeper/">
          https://github.com/juntao-dev/1housekeeper
        </a>
      </p>
    </AboutPageWrapper>
  );
};

export default AboutPage;
