import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import Reducers from './modules/user/index';

const store = createStore(
    Reducers,
    applyMiddleware(logger)
);

export default store;