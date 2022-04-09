import counterReducer from './counter';
import loggedReducer from './isLogged';
// import inputTextReducer from '../../ReduxGifBrowser/reducers/index'
import { combineReducers } from '@reduxjs/toolkit';

const allReducers = combineReducers({
  counterReducer: counterReducer,
  loggedReducer: loggedReducer,
  // inputTextReducer: inputTextReducer,
})

export default allReducers;