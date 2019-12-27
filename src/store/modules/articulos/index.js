import { combineReducers } from 'redux';
import getArticulosReducer from './getArticulos.reducer';
import deleteArticulosReducer from './delete.reducer';
import findArticulosReducer from './findArticulos.reducer';

const Reducers = combineReducers ({
    items: getArticulosReducer,
    response: deleteArticulosReducer,
    post: findArticulosReducer,
});

export default  Reducers;