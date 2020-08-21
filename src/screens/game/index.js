import React from 'react';
import { useDispatch } from 'react-redux';

import { screen } from '../../store/reducers/screen';
import { setScreen } from '../../store/actions/screen';
import Button from '../../components/button.js';
import GameBoard from '../../components/game.board';
import {newGameBoard} from '../../helpers/game.board'; // temporary

function Game() {
  const dispatch = useDispatch();

  const onClickSurrender = () => {
    // go to end screen
    dispatch(setScreen(screen.END_SCREEN));
  }

  const styles = {
    gameBoardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    gameInfoContainer: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  return (
    <div>
      <h1>Game Screen</h1>
      <div style={styles.gameBoardContainer}>
        <GameBoard grid={newGameBoard()} />
        <div style={styles.gameInfoContainer}>
          <Button text="SURRENDER" onClick={onClickSurrender}/>
        </div>
        <GameBoard grid={newGameBoard()} />
      </div>
    </div>
  );
}

export default Game;