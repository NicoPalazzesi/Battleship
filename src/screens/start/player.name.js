import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/input.field.css';
import { setPlayerName } from '../../store/actions/player';

function InputPlayerName(){
  const dispatch = useDispatch();
  const name = useSelector(store => store.player.name);

  const setName = function(event) {
    dispatch(setPlayerName(event.target.value));
  }

  return(
    <input
      className="inputField"
      type="text"
      placeholder="Player Name"
      value={name}
      onChange={setName}
    />
  )
}

export default InputPlayerName;