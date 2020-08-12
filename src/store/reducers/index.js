import { combineReducers } from 'redux';

import {screenReducer, screenInitialState} from './screen';

export default combineReducers(
  { 
    screen: screenReducer
  }, 
  { 
    screenReducer: screenInitialState
  }
)