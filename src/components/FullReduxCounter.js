import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement, loggedin} from '../Redux/actions/index.js'

class FullReduxCounter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.countNumber}</h2>
        <button onClick={this.props.tambah}>  +  </button>
        <button onClick={this.props.kurang}>  -  </button>
      </div>
    )
  }
}

const mapStateToStore = state => {
  return {
    countNumber: state.counterReducer
  }
}

const mapDispatchToStore = dispatch => {
  return {
    tambah: () => dispatch(increment(5)),
    kurang: () => dispatch(decrement(5)),
  }
}

export default connect(mapStateToStore, mapDispatchToStore)(FullReduxCounter)


// see it is very clean code compared to as we do without redux

