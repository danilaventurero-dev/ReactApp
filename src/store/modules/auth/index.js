import { combineReducers } from 'redux';
import login from './login.reducer';

const Reducers = combineReducers ({
    logueo: login,
    
});

export default  Reducers;