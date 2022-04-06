import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      textinput : '',
    }
    this.getInput = this.getInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(){
    this.setState(() => this.getDataAPI(this.state.textinput)); //memastikan fungsi memanggil sesuai dengan state textinput d
    console.log('Submitted Input: ' + this.state.textinput);
  }

  getInput(v){
    this.setState({textinput : v.target.value});
  }

  render(){
    const {gifdata} = this.state;
    const {getInput, submitInput} = this;

    return (
      <div>
        <input type="text" onChange={getInput}></input>
        <input type="submit" onClick={submitInput}></input>
      </div>
    );
  }
}
