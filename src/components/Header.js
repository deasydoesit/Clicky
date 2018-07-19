import React from "react";

const Header = props => (
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">Clicky</a>
    <span class="navbar-text">
        Click an image to begin!
    </span>
    <span class="navbar-text">
        Score: {props.score} | Top Score: {props.topScore}
    </span>
  </nav>
);

export default Header;