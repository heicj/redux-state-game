import React, { Component } from 'react';

export default class Square extends Component{
  render(){
    const { id } = this.props;
    return (
      <div id={id} onClick={this.handleClick}>
        {id}
      </div>
        
    );
  }
}