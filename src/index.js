import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import allReducers from './Redux/reducers/index.js';
import allReducers from './ReduxGifBrowser/reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// const myStore = createStore(allReducers);

// const globalState = {
//   totalOrder: 9,
// }

// const reducersz = (state = globalState, action) => {
//   return state
// }

const myStore = createStore(allReducers);
// //store global state

// //action increment
// const increment = (nr) => {
//   return {
//     type: 'increment',
//     payload: nr,
//   }
// }
// //reducer
// const counter = (state=0, action) => { ///////////////////statenya namany counter
//   switch (action.type) {
//     case 'increment':
//       return state + action.payload;
//   }
// }
// let store = createStore(counter);

// store.dispatch(increment(4));

// console.log(store.getState());

// const myStore = createStore(allReducer);

ReactDOM.render(
  
    <Provider store={myStore}>
      <App />
    </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
