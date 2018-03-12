import React, { Component } from 'react';
import GameBoard from './Gameboard';
import { connect } from 'react-redux';
import { newGame } from './actions';

class App extends Component{
  render(){
    const { newGame } = this.props;
    return (
      <div>
        <header> 
          <h1>Connect 3</h1>
          <button onClick={newGame}> New Game </button>
        </header>
        <GameBoard/>
      </div>
    );
  }
}

export default connect(
  null, 
  { newGame }
)(App);