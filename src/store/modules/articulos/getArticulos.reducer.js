import {ARTICULO_GET} from './const';

const initialState = {
    items:  [],
    error: ''
};

const getArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_GET:
            return{
                items: action.payload,
                error: null,
            };
    
        default:
            return prevState;
    }
};

export default getArticulosReducer;