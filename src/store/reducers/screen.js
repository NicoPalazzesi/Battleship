export const screen = {
  START_SCREEN: 0,
  GAME_SCREEN: 1
}

export const screenInitialState = {
  currentScreen: screen.START_SCREEN
};

export const screenReducer = (
  state = screenInitialState,
  action
) => {
  switch(action.type){
    case 'SCREEN/SET_CURRENT_SCREEN':
      return {
        ...state,
        currentScreen: action.payload
      }
    default:
      return {
        ...state
      }
  }
}