import {ARTICULO_FIND,ARTICULO_EMPTY} from './const';

const initialState = {
    items:  [],
    error: '',
    band:false
};

const findArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_FIND:
            return{
                items: action.payload,
                error: null,
                band:true,
            };
            case ARTICULO_EMPTY:
                return{
                    items: prevState.items,
                    error: null,
                    band:false,
                };    
    
        default:
            return prevState;
    }
};

export default findArticulosReducer;