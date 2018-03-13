import React, { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';
import { connect } from 'react-redux';
import { addPlayer } from './actions';

class Home extends Component{
  render(){
    const { addPlayer } = this.props;
    return (
      <div><AddPlayerForm onSubmit={addPlayer}/>
      </div>
    );
  }
}

export default connect(
  null,
  { addPlayer }
)(Home)