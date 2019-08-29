import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import CardDecks from "./CardDecks";
import video from "./video.mp4";

import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="videojumbotron" style={{ padding: 0 }}>
          <video autoPlay="autoplay" loop="loop" muted="muted">
            <source src={video} type="video/mp4" />
          </video>
          <Jumbotron style={{ zIndex: 100 }}>
            <CardDecks />
          </Jumbotron>
        </Jumbotron>
        <div className="container">&copy; Juntao Zeng 2019</div>
      </div>
    );
  }
}

export default LandingPage;
