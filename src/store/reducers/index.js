import { combineReducers } from 'redux';

import {screenReducer, screenInitialState} from './screen';
import {playerReducer, playerInitialState} from './player';

export default combineReducers(
  { 
    screen: screenReducer,
    player: playerReducer
  }, 
  { 
    screenReducer: screenInitialState,
    playerReducer: playerInitialState
  }
)