import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';
import { useSelector } from 'react-redux';
import { screen } from './store/reducers/screen'

import StartScreen from './screens/start';
import GameScreen from './screens/game';
import EndScreen from './screens/end';

function CurrentScreen(){
  const currentScreen = useSelector(store => store.screen.currentScreen);
  
  if(currentScreen === screen.GAME_SCREEN){
    return( <GameScreen /> );
  }
  if(currentScreen === screen.END_SCREEN){
    return( <EndScreen /> );
  }
  // default return
  return( <StartScreen /> );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrentScreen />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);