export function setScreen(screen){
  return async function(dispatch){
    dispatch({ type: 'GAME/SET_SCREEN', payload: screen });
  }
}