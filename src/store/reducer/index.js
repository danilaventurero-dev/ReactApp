import { combineReducers } from 'redux';
import reducer from './reducers';

const reducers = combineReducers({
    todos: reducer,
});

export default reducers;