import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

class StateAPI extends Component { // harus huruf besar
  constructor(props) {
    super(props)
  
    this.state = {
       outHTML: '',
       greet: 'HELLO',
    }
  }

  change = (v) => {
    this.setState({greet: 'GOODBYE'});
    this.setState({outHTML: v});
  }

  yesHTML = (<><h1>YES</h1></>);
  
  noHTML = (<><h1>NO</h1></>);
  
  render() {
    const {outHTML, greet} = this.state;
    return (
      <div>
        <div>StateAPI</div>
        <h1>{greet}</h1>
        <button onClick={() => {this.change(this.yesHTML)}}>YES</button>
        <button onClick={() => {this.change(this.noHTML)}}>NO </button>
        <div>{outHTML}</div>
      </div>
    )
  }
}

export default StateAPI;

