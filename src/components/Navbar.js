import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">Clicky</a>
    <span className="navbar-text">
        Click an image to begin!
    </span>
    <span className="navbar-text">
        Score: {props.score} | Top Score: {props.topScore}
    </span>
  </nav>
);

export default Navbar;