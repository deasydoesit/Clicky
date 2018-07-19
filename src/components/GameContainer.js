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
      let id = parseInt(e.target.id);
      let score = this.state.score;
      let clicked = this.state.clicked;
      if (this.state.clicked.indexOf(id) === -1) {
        alert(id);
        clicked.push(id);
        score++;
        this.setState({clicked: clicked, score: score});
        this.setState({pieces: this.randomizePieces(cards)});
      } else {
        let topScore = this.state.topScore;
        if (score > topScore) {
          this.setState({ topScore: score, score: 0});
          this.setState({pieces: this.randomizePieces(cards), clicked: []});
        } else {
          this.setState({score: 0});
          this.setState({pieces: this.randomizePieces(cards), clicked: []});
        }
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
  