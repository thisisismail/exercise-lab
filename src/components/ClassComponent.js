import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increment, decrement, loggedin} from '../Redux/actions/index.js'

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
        <h2>{this.props.message}</h2> 
        {/* ditambahin props nya jangan lupa */}
        {/* <button onClick={this.change}>Change Message</button> */}
        <button onClick={this.change}>Change Message</button>
        <h1>{count}</h1>
        <button onClick={this.props.summing}>Tambah</button> 
        {/* diatas adalah contoh redux tanpa action */}
        <button onClick={this.substract}>Kurang</button><br></br>
        <button onClick={this.props.tambah}>Tambah Action</button> 
        {/* diatas adalah contoh redux dengan action */}
        <h1>{resultHTML}</h1>
      </div>
    )
  }
}

const mapStateToStore = (state) => {
  return {
    message: state.counterReducer // kita import niai state dari counterReducer
  }
}

const mapDispatchToStore = (dispatch) => {
  return {
    summing: () => dispatch({type: 'INCREMENT', payload:8}), //kita panggil reducers fungsi increment
    // di atas tadi actionnya belom kepake
    tambah: () => dispatch(increment(8)) // atau bisa juga dipanggil seperti ini
    // nah klo sekarang baru dipake, lebih hemat kan, outpoutnya sama aja
    // paylaodnya itu parameter
  }
}

export default connect(mapStateToStore, mapDispatchToStore)(ClassComponent);
