import {USER_GET} from './const';

const initialState = {
    items:  [],
    error: ''
};

const getReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_GET:
            return{
                items: action.payload,
                error: null,
            };
    
        default:
            return prevState;
    }
};

export default getReducer;