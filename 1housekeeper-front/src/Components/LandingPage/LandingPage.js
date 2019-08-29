import React from "react";
import CardDecks from "./CardDecks";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <div>
          <div style={{padding: "10% 5%"}}>
            <CardDecks />
          </div>
        </div>
        <div className="footerbox">&copy; Juntao Zeng 2019</div>
      </div>
    );
  }
}

export default LandingPage;
