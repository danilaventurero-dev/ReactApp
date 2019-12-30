import {ARTICULO_FIND, ARTICULO_SOLICITUD, ARTICULO_RESPONSE} from './const';

const initialState = {
    item:  [],
    error: '',
    solicitud:false,
    success:false
};

const findArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_SOLICITUD:
            return{
                items: prevState.items,
                error: null,
                solicitud:true,
                success:false
            };
            case ARTICULO_FIND:
                return{
                    items: action.payload,
                    error: null,
                    solicitud:true,
                    success:false,
                };    
            case ARTICULO_RESPONSE:
                return{
                    items: prevState.items,
                    error: null,
                    solicitud:false,
                    success:true,
                };    
        default:
            return prevState;
    }
};

export default findArticulosReducer;