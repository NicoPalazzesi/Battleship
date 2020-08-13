import React from 'react';
import { useDispatch } from 'react-redux';

import InputPlayerName from './player.name';
import Button from '../../components/button.js';
import { validatePlayerName } from '../../store/actions/player';
import { setScreen } from '../../store/actions/screen';
import { screen } from '../../store/reducers/screen';

function Start() {

  const dispatch = useDispatch();

  const onClickStartGame = () => {
    // validate player name
    dispatch(validatePlayerName());

    // go to game screen
    dispatch(setScreen(screen.GAME_SCREEN));
  }


  return (
    <div>
      <h1>Battleship</h1>
      <InputPlayerName />
      <br/>
      <Button text="START GAME" onClick={onClickStartGame} />
    </div>
  );
}

export default Start;