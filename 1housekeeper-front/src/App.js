import React from "react";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import MembersPage from "./Components/MembersPage";
import FooterBar from "./Components/FooterBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import AboutPage from "./Components/AboutPage";

// import logo from './logo.svg';
// import './App.css';

const PageBody = styled.div`
  height: 100%;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
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
          <Route path="/about" exact component={AboutPage} />
        </PageBody>
      </Router>
      <FooterBar />
    </div>
  );
}

export default App;
