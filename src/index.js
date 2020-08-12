import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import StartScreen from './screens/start';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StartScreen />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);