import {ARTICULO_FIND} from './const';

const initialState = {
    items:  [],
    error: ''
};

const findArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_FIND:
            return{
                items: action.payload,
                error: null,
            };
    
        default:
            return prevState;
    }
};

export default findArticulosReducer;