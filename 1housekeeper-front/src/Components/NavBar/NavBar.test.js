import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./NavBar";

describe("<NavBar />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const NavBarWrap = () => {
      return (
        <Router>
          <NavBar />
        </Router>
      );
    };
    ReactDOM.render(<NavBarWrap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
