import React from 'react';
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import MembersPage from './Components/MembersPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

function dashboard() {
  return (
    <div style={{position: "absolute", bottom: "0"}}>
      Hello Dashboard
    </div>
  );
}

function property() {
  return (
    <div style={{position: "absolute", bottom: "0"}}>
      Hello Property
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" exact component={dashboard} />
          <Route path="/members" exact component={MembersPage} />
          <Route path="/property" exact component={property} />
        </div>
      </Router>
    </div>
  );
}

export default App;
