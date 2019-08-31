import React from "react";
import "./LandingPage.css";
import HouseBanner from './HouseBanner';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="pageWrapper">
        <div>
          <HouseBanner />
          
        </div>
        <div className="footerbox">&copy; 1houseKeeper 2019</div>
      </div>
    );
  }
}

export default LandingPage;
