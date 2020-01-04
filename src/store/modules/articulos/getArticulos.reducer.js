import {ARTICULO_RESPONSE,ARTICULO_GET, ARTICULO_SOLICITUD, ARTICULO_GET_ERROR} from './const';

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
                error: prevState.error,
                solicitud:true,
                success:false,
            };
        case ARTICULO_GET:
            return{
                items: action.payload,
                error: prevState.error,
                solicitud: true,
                success:false,
            };
        case ARTICULO_RESPONSE:
            return{
                items: prevState.items,
                error: prevState.error,
                solicitud:false,
                success:false,
            };
        case ARTICULO_GET_ERROR:
            return{
                items: prevState.items,
                error: action.payload,
                solicitud:false,
                success:true,
            };
    
        default:
            return prevState;
    }
};

export default getArticulosReducer;