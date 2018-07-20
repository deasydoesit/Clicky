import React, { Component } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PiecesContainer from "./PiecesContainer";
import cards from "../cards.json";
import Particles from 'react-particles-js';


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

    randomizePieces = (array) => { //Fisher-Yates shuffle algorithm to randomize duplicate of cards.json
      let result = array;
      for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]]; 
      }
      return result;
    }

    handleClick = (e) => { //function to handle click event on pieces.
      let id = parseInt(e.target.id);
      let score = this.state.score;
      let clicked = this.state.clicked;
      if (this.state.clicked.indexOf(id) === -1) { //if the clicked img isn't in the 'clicked' array,                                //insert the id of clicked image into array
        clicked.push(id);
        score++;
        this.setState({clicked: clicked, score: score});
        this.setState({pieces: this.randomizePieces(cards)});
      } else {   //Otherwise the game has been lost, update top score if need be then reset
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
          <Navbar
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <Hero />
          <Particles 
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
          />
          <PiecesContainer
            pieces={this.state.pieces}  
            handleClick={this.handleClick}
          />
        </Container>
      );
    }
  }
  
  export default GameContainer;
  