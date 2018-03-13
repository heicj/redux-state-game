import React, { Component } from 'react';

export default class PlayerList extends Component {
  
  render() {
    const { players } = this.props;
    return (
      <ul>
        {players && players.map(p => <li key={p.name} value={p.name}>{p.name}</li>)}
      </ul>
    );
  }
}
