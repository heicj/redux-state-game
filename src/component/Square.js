import React, { Component } from 'react';

export default class Square extends Component{
  render(){
    const { id, onClick } = this.props;
    return (
      <div id={id} onClick={() => onClick(id)}>
        {id}
      </div>
        
    );
  }
}