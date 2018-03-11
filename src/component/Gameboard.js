import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameboard.css';
import { playerChoice } from './actions';
import Square from './Square';

class Gameboard extends Component{

  handleClick(target){
    console.log(target);
    playerChoice(target);
  }

  render(){

    const { game } = this.props;

    return (
      <section id="gameboard"> 
        {game.gameBoard.map(s => <Square key={s} id={s} onClick={this.handleClick}/>)}
      </section>
    );
  }
}

export default connect(
  (state) => ({ game: state.game }),
  { playerChoice } 
)(Gameboard);