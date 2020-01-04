import {ARTICULO_FIND_SOLICITUD, ARTICULO_FIND_EJECUCION, ARTICULO_FIND_RESPONSE,ARTICULO_FIND_ERROR,ARTICULO_FIND_VOID } from './const';

const initialState = {
    item:  [],
    message: '',
    error: false,
    solicitud:false,
    success:false
};

const findArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_FIND_SOLICITUD:
            return{
                item: prevState.item,
                message:prevState.message,
                error: prevState.error,
                solicitud:action.payload,
                success:prevState.success
            };
            case ARTICULO_FIND_EJECUCION:
                return{
                    item: action.payload,
                    message:prevState.message,
                    error: prevState.error,
                    solicitud:prevState.solicitud,
                    success:prevState.success
                };    
            case ARTICULO_FIND_RESPONSE:
                    return{
                        item: prevState.item,
                        message:prevState.message,
                        error: prevState.error,
                        solicitud:false,
                        success:action.payload,
                    };   
            case ARTICULO_FIND_ERROR:
                return{
                    item: prevState.item,
                    message: action.payload,
                    error:true,
                    solicitud:false,
                    success:false
                };
            case ARTICULO_FIND_VOID:
                return{
                    item: prevState.item,
                    message: '',
                    error:false,
                    solicitud:false,
                    success:false
                };    
        default:
            return prevState;
    }
};

export default findArticulosReducer;