import { combineReducers } from 'redux';

import {gameReducer, gameInitialState} from './game';

export default combineReducers(
  { 
    game: gameReducer
  }, 
  { 
    gameReducer: gameInitialState
  }
)