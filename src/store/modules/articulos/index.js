import { combineReducers } from 'redux';
import getArticulosReducer from './getArticulos.reducer';
import deleteArticulosReducer from './delete.reducer';

const Reducers = combineReducers ({
    items: getArticulosReducer,
    response: deleteArticulosReducer,
});

export default  Reducers;