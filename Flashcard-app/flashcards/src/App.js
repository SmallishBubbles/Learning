import React, { Component } from 'react';
import './App.css';
import Card from './card/card.jsx'
import styled from 'styled-components';
import DrawButton from './drawbutton/drawbutton.jsx'

let CardRow = styled.div`
`
let ButtonRow = styled.div`
`



//React firebase flashcards app tutorial

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          word: "IDD/IDE",
          definition: "Integrated development environment"
        },
        {
          id: 2,
          word: "HTML",
          definition: "Hyper-Text Markup Language"
        }
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.updateCard = this.updateCard.bind(this);

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }


  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <CardRow>
          <Card word={this.state.currentCard.word} 
                definition={this.state.currentCard.definition}
                />
        </CardRow>

        <ButtonRow>
          <DrawButton drawCard={this.updateCard}/>
        </ButtonRow>
      </div>
    );
  }
}

export default App;
