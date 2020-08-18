import React from 'react';

import '../styles/game.board.css';
import { squareState } from '../helpers/game.board';
import * as Color from '../styles/colors';

/**
 * Create new square
 *
 * @param {string} key
 * @param {Object} square
 * 
 * @return {React.Element<'div'>}
 */
const renderSquare = (key, square) => {
  let backgroundColor;
  switch(square.state){
    case squareState.SHIP:
      backgroundColor = Color.grayShipColor;
      break;
    case squareState.WATER: 
      backgroundColor = Color.blueWaterColor;
      break;
    case squareState.HIT: 
      backgroundColor = Color.orangeHitColor;
      break;
    case squareState.DESTROYED: 
      backgroundColor = Color.redDestroyedColor;
      break;
    default: 
      backgroundColor = Color.whiteColor;
  }
  return(
    <div 
      className="square"
      style={{backgroundColor}}
      key={key}
    />
  );
}

/**
 * Render game board of NxN columns and rows
 *
 * @param {Props} props
 * 
 * @return {React.Element<'div'>}
 */
function renderGameBoard(props){
  const { grid } = props;
  const size = grid.length;
  let gameBoard = [];
  // columns
  for(let i=0; i<size; i++) {
    gameBoard[i] = [];
    // rows
    for(let j=0; j<size; j++) {
      gameBoard[i][j] = renderSquare(`${i}${j}`, props.grid[i][j]);
    }
    gameBoard[i] = <div key={i}>{gameBoard[i]}</div>
  }

  return (
    <div className="container">
      {gameBoard}
    </div>
  );
}

export default renderGameBoard;