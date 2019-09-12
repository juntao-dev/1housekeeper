import React from "react";
import "./LandingPage.css";
import HouseBanner from "./HouseBanner";
import CardDeck from "./CardDeck";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <div>
          <HouseBanner />
          <CardDeck />
        </div>
      </div>
    );
  }
}

export default LandingPage;
