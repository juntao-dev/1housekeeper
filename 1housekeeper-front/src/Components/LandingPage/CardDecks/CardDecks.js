import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import house from "./house.jpg";
import sunhouse from "./sunhouse.jpg";
import snowhouse from "./snowhouse.jpg";
import "./CardDecks.css";

const CardDecks = () => {
  return (
    <CardDeck>
      <Card style={{ borderRadius: "2rem", overflow: "hidden", cursor: "pointer" }}>
        <Link to="/dashboard">
          <Card.Img variant="top" src={house} />
          <Card.Body>
            <Card.Title>Dashboard</Card.Title> 
          </Card.Body>
        </Link>
      </Card>
      
      <Card style={{ borderRadius: "2rem", overflow: "hidden" }}>
        <Link to="/members">
          <Card.Img variant="top" src={sunhouse} />
          <Card.Body>
            <Card.Title>Members</Card.Title>
          </Card.Body>
        </Link>
      </Card>

      <Card style={{ borderRadius: "2rem", overflow: "hidden" }}>
        <Link to="/property">
          <Card.Img variant="top" src={snowhouse} />
          <Card.Body>
            <Card.Title>Property</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </CardDeck>
  );
};

export default CardDecks;
