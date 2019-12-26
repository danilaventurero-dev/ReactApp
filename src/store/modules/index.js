import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import articulos from './articulos';

const rootReducer = combineReducers({
    user,
    auth,
    articulos,
});

export default rootReducer;