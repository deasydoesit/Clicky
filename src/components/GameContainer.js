import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import Hero from "./Hero";

class GameContainer extends Component {
    state = {
      score: 0,
      topScore: 0
    };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   this.getUser();
    //   console.log(this.state)
    // }
  
    render() {
      return (
        <Container>
          <Header
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <Hero />    

          
        </Container>
      );
    }
  }
  
  export default GameContainer;
  