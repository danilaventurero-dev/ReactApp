import { combineReducers } from 'redux';
import getReducer from './get.reducer';
import createReducer from './create.reducer';

const Reducers = combineReducers ({
    items: getReducer,
    create: createReducer,
    
});

export default  Reducers;