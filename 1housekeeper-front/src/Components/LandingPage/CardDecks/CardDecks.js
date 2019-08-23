import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import house from './house.jpg';
import sunhouse from './sunhouse.jpg';
import snowhouse from './snowhouse.jpg';

const CardDecks = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={house} />
        <Card.Body>
          <Card.Title>Dashboard</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={sunhouse} />
        <Card.Body>
          <Card.Title>Family</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={snowhouse} />
        <Card.Body>
          <Card.Title>Property</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default CardDecks;