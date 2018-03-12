import React, { Component } from 'react';
import GameBoard from './Gameboard';
import { connect } from 'react-redux';
import { newGame } from './actions';
import './App.css';

class App extends Component{
  render(){
    const { newGame, activePlayer } = this.props;
    return (
      <div>
        <header id='header'> 
          <h1>Connect 3</h1>
          <button onClick={newGame}> New Game </button>
        </header>
        <GameBoard/>
        <section id="current">
          <h1>
            Current player: {activePlayer}
          </h1>
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({
    activePlayer: state.game.activePlayer }), 
  { newGame }
)(App);