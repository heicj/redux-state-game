import React, { Component } from 'react';

export default class AddPlayerForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render(){
    const { name } = this.state;

    return (
      <div>
        <form>
          <label htmlFor='name'>Add new player:
          <input required value={name}  name='name' onChange={this.handleChange}/>
          </label>
          <button type='submit'>ADD</button> 
        </form>
      </div>
    );
  }
}