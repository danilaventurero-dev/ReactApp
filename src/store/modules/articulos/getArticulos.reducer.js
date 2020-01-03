import {ARTICULO_RESPONSE,ARTICULO_GET, ARTICULO_SOLICITUD} from './const';

const initialState = {
    items:  [],
    error: '',
    solicitud:false,
    success:false,
};

const getArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_SOLICITUD:
            return{
                items: prevState.items,
                error: '',
                solicitud:true,
                success:false,
            };
        case ARTICULO_GET:
            return{
                items: action.payload,
                error: null,
                solicitud: true,
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

export default getArticulosReducer;