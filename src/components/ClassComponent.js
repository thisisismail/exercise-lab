import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'how are you',
      greet: 'good morning',
      count: 0,
      resultHTML: '',
    }
  }

  // change = () => {
  //   this.setState({message: 'hope'},() => console.log(this.state.message))
  // };

  change = () => {
    this.setState({message: 'I am good'},() => console.log(this.state.message));
    this.setState({resultHTML: this.inputHTML()})
  };

  summing = () => {
    this.setState({count: this.state.count + 1}, () => console.log(this.state.count)) // solution one
  }

  // summing = () => {
  //   this.setState((prevState) => ({count: prevState.count + 1}),() => console.log(this.state.count)) // soluton two
  // }

  summing = () => { // another form
    this.setState((prev) => {return({count: prev.count + 1})})
  }

  substract = () => {
    this.setState((prev) => ({count: prev.count - 1}))
  }

  inputHTML = () => {
    return(
      <div>
        KODOK
      </div>
    )
  }
  
  render() {
    const{message, greet, count, resultHTML} = this.state;
    return (
      // <div>{this.state.message}</div>
      <div> 
        <h2>{greet}</h2>
        <h2>{message}</h2>
        {/* <button onClick={this.change}>Change Message</button> */}
        <button onClick={this.change}>Change Message</button>
        <h1>{count}</h1>
        <button onClick={this.summing}>Tambah</button>
        <button onClick={this.substract}>Kurang</button>
        <h1>{resultHTML}</h1>
      </div>
    )
  }
}

export default ClassComponent;
