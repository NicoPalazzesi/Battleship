import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';
import { useSelector } from 'react-redux';
import { screen } from './store/reducers/screen'

import StartScreen from './screens/start';
import GameScreen from './screens/game';

function CurrentScreen(){
  const currentScreen = useSelector(store => store.screen.currentScreen);
  
  if(currentScreen === screen.GAME_SCREEN){
    return( <GameScreen /> );
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