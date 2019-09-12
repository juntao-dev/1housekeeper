import React from "react";
import styled from "styled-components";
import NavCard from "./NavCard";

const CardDeckWrapper = styled.div`
  /* border: 1px solid blue; */
  /* background-color: #27e374; */
  background-image: linear-gradient(#27e374, #ccf5dd);
  height: 40vh;
  margin: 20px 0;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
`;

const CardDeck = props => {
  return (
    <div>
      <CardDeckWrapper>
        <NavCard
          label="Members"
          image="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
        />
        <NavCard
          label="Dashboard (Coming Soon)"
          image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80"
        />
        <NavCard
          label="Finance (Coming Soon)"
          image="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <NavCard
          label="Events (Coming Soon)"
          image="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
      </CardDeckWrapper>
    </div>
  );
};

export default CardDeck;
