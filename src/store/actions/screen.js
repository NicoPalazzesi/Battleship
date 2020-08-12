export function setScreen(screen){
  return async function(dispatch){
    dispatch({ type: 'SCREEN/SET_CURRENT_SCREEN', payload: screen });
  }
}