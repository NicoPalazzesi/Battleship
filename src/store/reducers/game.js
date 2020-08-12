export const screen = {
  START_SCREEN: 0
}

export const gameInitialState = {
  screen: screen.START_SCREEN
};

export const gameReducer = (
  state = gameInitialState,
  action
) => {
  switch(action.type){
    case 'GAME/SET_SCREEN':
      return {
        ...state,
        screen: action.payload
      }
    default:
      return {
        ...state
      }
  }
}