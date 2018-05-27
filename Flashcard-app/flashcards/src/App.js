import React, { Component } from 'react';
import Card from './card/card.jsx';
import DrawButton from './drawbutton/drawbutton';
import firebase from 'firebase/app';
import 'firebase/database';
import styled from 'styled-components';

import { DB_CONFIG } from './config/firebase/db_config.js';


//React firebase flashcards app tutorial


let CardRow = styled.div`
  margin-top: 5%;
  padding: 5 px;
`
let ButtonRow = styled.div`
  padding: 5 px;
`


class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        word: snap.val().word,
        definition: snap.val().definition,
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })

    })
  }

 getRandomCard(currentCards) {
   var randomIndex = Math.floor(Math.random() * currentCards.length);
   var card = currentCards[randomIndex];
   if (card === this.state.currentCard) {
     this.getRandomCard(currentCards)
   }

   return (card);
 }


  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
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
