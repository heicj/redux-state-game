import React, { Component } from 'react';
import './gameboard.css';
import Square from './Square';

export default class Gameboard extends Component{
  render(){
    const squares = [1,2,3,4,5,6,7,8,9];
    return (
      <section id="gameboard"> 
        {squares.map(s => <Square key={s} id={s}/>)}
      </section>
    );
  }
}