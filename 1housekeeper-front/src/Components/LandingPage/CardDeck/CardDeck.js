import React from "react";
import styled from "styled-components";
import NavCard from "./NavCard";
import { Link } from "react-router-dom";

const CardDeckWrapper = styled.div`
  /* border: 1px solid blue; */
  /* background-color: #27e374; */
  background-image: linear-gradient(#27e374, #ccf5dd);
  height: 40vh;
  margin: 20px 10px;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    font-size: 80%;
    flex-direction: column;
    height: 100%;
    text-align: center;
    display: inline-block;
    padding-bottom: 20px;
  }
`;

const CardDeck = props => {
  return (
    <div>
      <CardDeckWrapper>
        <NavCard
          page="members"
          label="Members"
          image="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
        />
        <NavCard
          page="dashboard"
          label="Dashboard (Coming Soon)"
          image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80"
        />
        <NavCard
          page="finance"
          label="Finance (Coming Soon)"
          image="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <NavCard
          page="events"
          label="Events (Coming Soon)"
          image="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
      </CardDeckWrapper>
    </div>
  );
};

export default CardDeck;
