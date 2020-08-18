import React from 'react';

import GameBoard from '../../components/game.board';
import {newGameBoard} from '../../helpers/game.board'; // temporary

function Game() {

  const styles = {
    gameBoardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }

  return (
    <div>
      <h1>Game Screen</h1>
      <div style={styles.gameBoardContainer}>
        <GameBoard grid={newGameBoard()} />
        <GameBoard grid={newGameBoard()} />
      </div>
    </div>
  );
}

export default Game;