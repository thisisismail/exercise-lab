import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from '@reduxjs/toolkit';

const allReducers = combineReducers({
  hitung: counterReducer,
  status: loggedReducer,
})