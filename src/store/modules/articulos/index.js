import { combineReducers } from 'redux';
import getArticulosReducer from './getArticulos.reducer';
import deleteArticulosReducer from './delete.reducer';
import findArticulosReducer from './findArticulos.reducer';
import createArticulosReducer from './create.reducer';

const Reducers = combineReducers ({
    items: getArticulosReducer,
    response: deleteArticulosReducer,
    post: findArticulosReducer,
    create:createArticulosReducer,
});

export default  Reducers;