export const squareState = {
  DEFAULT: 0,
  SHIP: 1,
  WATER: 2,
  HIT: 3,
  DESTROYED: 4
};

/**
 * Create new square object
 * 
 * @return {Object}
 */
function newSquare(){
  return { state: squareState.DEFAULT };
}

/**
 * Create new game board of 'size' rows and columns
 *
 * @param {number}
 * 
 * @return {Array<Array<Object>>}
 */
export function newGameBoard(){
  const size = process.env.REACT_APP_GRID_SIZE;
  var gameBoard = [];
  for(var i=0; i<size; i++) {
    gameBoard[i] = [];
    for(var j=0; j<size; j++) {
      gameBoard[i][j] = newSquare();
    }
  }
  return gameBoard;
}