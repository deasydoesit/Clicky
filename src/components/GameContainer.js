import React, { Component } from "react";
import Container from "./Container";
import Header from "./Header";
import Hero from "./Hero";
import PiecesContainer from "./PiecesContainer";
import cards from "../cards.json";

class GameContainer extends Component {
    state = {
      pieces: [],
      score: 0,
      topScore: 0,
      clicked: []
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

    handleClick = (e) => {
      let score = this.state.score;
      let id = parseInt(e.target.id);
      let clickedUpdate = this.state.clicked;
      if (this.state.clicked.indexOf(id) === -1) {
        alert(id);
        clickedUpdate.push(id);
        score++;
        this.setState({clicked: clickedUpdate, score: score});
        this.randomizePieces(cards);
      } else {
        alert("hey, it's already in the array");
        this.setState({clicked: clickedUpdate, score: score});
        this.randomizePieces(cards);
      }
    };
  
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
            handleClick={this.handleClick}
          />
        </Container>
      );
    }
  }
  
  export default GameContainer;
  