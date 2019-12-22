import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import rootReducer from './modules/user';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default store;