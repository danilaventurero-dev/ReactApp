import { combineReducers } from 'redux';

import getReducer from './get.reducer';

const rootReducer = combineReducers ({
    getReducer,
});

export default  rootReducer;