import inputTextReducer from './input';
import {combineReducers} from '@reduxjs/toolkit';

const allReducers = combineReducers({
  inputTextReducer: inputTextReducer,
})

export default allReducers;