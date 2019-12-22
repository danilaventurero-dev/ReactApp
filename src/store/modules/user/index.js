import { combineReducers } from 'redux';
import getReducer from './get.reducer';

const Reducers = combineReducers ({
    items: getReducer,
});

export default  Reducers;