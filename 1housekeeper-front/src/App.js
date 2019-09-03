import React from "react";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import MembersPage from "./Components/MembersPage";
import FooterBar from "./Components/FooterBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

// import logo from './logo.svg';
// import './App.css';

const PageBody = styled.div`
  margin-top: 2.5rem;
`;

function dashboard() {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>Hello Dashboard</div>
  );
}

function property() {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>Hello Property</div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <PageBody>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" exact component={dashboard} />
          <Route path="/members" exact component={MembersPage} />
          <Route path="/property" exact component={property} />
        </PageBody>
      </Router>
      <FooterBar />
    </div>
  );
}

export default App;
