import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameboard.css';
import { playerChoice } from './actions';
import Square from './Square';

class Gameboard extends Component{

  handleClick = target => {
    if(this.props.turns < 9){
      console.log(target);
      const { playerChoice } = this.props;
      playerChoice(target);
    }
  }

  render(){

    const { game } = this.props;

    return (
      <section id="gameboard">
       
        {game.gameBoard.map((s, i) => <Square value={s} state={game} key={i} id={i} onClick={this.handleClick}/>)}
      </section>
    );
  }
}

export default connect(
  state => ({ 
    game: state.game,
    turns: state.game.turns }),
  { playerChoice } 
)(Gameboard);