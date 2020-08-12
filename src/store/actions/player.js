export function setPlayerName(name){
  return async function(dispatch){
    dispatch({ type: 'PLAYER/SET_PLAYER_NAME', payload: name });
  }
}

export function validatePlayerName(name){
  return async function(dispatch){
    dispatch({ type: 'PLAYER/VALIDATE_PLAYER_NAME' });
  }
}