import {
    ARTICULO_CREATE_SOLICITUD 
    , ARTICULO_CREATE_EJECUCION
    , ARTICULO_CREATE_RESPONSE
    , ARTICULO_VOID
    ,ARTICULO_ERROR
} from './const'; 

const initialState = {
    data:  [],
    error: '',
    success:false,
    solicitud:false,
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_CREATE_SOLICITUD:
            return{
                data: prevState.data,
                error: prevState.error,
                success: false,
                solicitud:true,
            };
        case ARTICULO_CREATE_EJECUCION:
            return{
                data: prevState.data,
                error: '',
                success: false,
                solicitud:true
            };
        case ARTICULO_CREATE_RESPONSE:
            return{
                data: prevState.data,
                error: null,
                solicitud: false,
                success: true,
            };
        case ARTICULO_VOID:
            return{
                data: prevState.data,
                error: null,
                success: false,
                solicitud: false,
            };
            case ARTICULO_ERROR:
                return{
                    data: prevState.data,
                    error: action.payload,
                    success: false,
                    solicitud: false,
                };
        default:
            return prevState;
    }
};

export default createReducer;