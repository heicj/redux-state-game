import React, { Component } from 'react';
import GameBoard from './Gameboard';
import Player from './Player';

export default class App extends Component{
  render(){
    return (
      <div>
        <header> 
          <h1>Connect 3</h1>
          <Player/><Player/>
        </header>
        <GameBoard/>
      </div>
    );
  }
}