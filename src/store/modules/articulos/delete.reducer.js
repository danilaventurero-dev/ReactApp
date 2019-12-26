import {ARTICULO_DELETE} from './const';

const initialState = {
    message:  '',
    error: ''
};

const deleteArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_DELETE:
            return{
                message: action.payload,
                error: null,
            };
    
        default:
            return prevState;
    }
};

export default deleteArticulosReducer;