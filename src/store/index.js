import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

export const store = createStore(Reducers, applyMiddleware(Thunk));