import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, loggedin} from '../Redux/actions/index.js'

function FullReduxCounter_Functional(props) {
  return (
    <div>
      <h2>{props.countNumber}</h2>
      <button onClick={props.tambah}>  +   </button>
      <button onClick={props.kurang}>  -   </button>
    </div>
  )
}

const mapStateToStore = state =>{
  return {
    countNumber: state.counterReducer
  }
}

const mapDispatchToStore = dispatch =>{
  return {
    tambah: () => dispatch(increment(5)),
    kurang: () => dispatch(decrement(5))
  }
}

export default connect(mapStateToStore, mapDispatchToStore)(FullReduxCounter_Functional)

// see it is very clean code compared to as we do without redux
// plus, it is functional component, goodbye 'this'
