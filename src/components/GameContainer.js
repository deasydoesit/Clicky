import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import Hero from "./Hero";
import PiecesContainer from "./PiecesContainer";
import cards from "../cards.json";

class GameContainer extends Component {
    state = {
      pieces: [],
      rowCount: 0,
      score: 0,
      topScore: 0,
    };
  
    componentDidMount() {
      this.setState({pieces: this.randomizePieces(cards)})
    }

    randomizePieces = (array) => {
      let result = array;
      for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]]; 
      }
      return result;
    }
  
    render() {
      return (
        <Container>
          <Header
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <Hero />
          <PiecesContainer
            pieces={this.state.pieces}  
          />
        </Container>
      );
    }
  }
  
  export default GameContainer;
  