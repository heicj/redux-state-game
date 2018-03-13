import React, { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';
import { connect } from 'react-redux';
import { addPlayer, loadPlayers } from './actions';
import PlayerList from './PlayerList';

class Home extends Component{

  componentDidMount() {
    this.props.loadPlayers();  
  }

  render(){
    const { addPlayer, players } = this.props;
    return (
      <div>
        <PlayerList players={players}/>
        <AddPlayerForm onSubmit={addPlayer}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    players: state.players.players }),
  { addPlayer, loadPlayers }
)(Home);