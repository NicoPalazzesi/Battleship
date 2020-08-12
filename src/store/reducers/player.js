export const playerInitialState = {
  name: ''
};

export const playerReducer = (
  state = playerInitialState,
  action
) => {
  switch(action.type){
    case 'PLAYER/SET_PLAYER_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'PLAYER/VALIDATE_PLAYER_NAME':
      return {
        ...state,
        name: state.name === '' ? 'Player' : state.name
      }
    default:
      return {
        ...state
      }
  }
}