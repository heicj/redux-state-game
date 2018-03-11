import React, { Component } from 'react';

export default class Square extends Component{
  render(){
    const { id, onClick, value } = this.props;
    return (
      <div id={id} onClick={() => onClick(id)}>
        {value}
      </div>
        
    );
  }
}