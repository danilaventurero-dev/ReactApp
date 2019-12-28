import {
    ARTICULO_SOLICITUD 
    , ARTICULO_CREATE
    , ARTICULO_RESPONSE
    , ARTICULO_VOID
} from './const';

const initialState = {
    data:  [],
    error: '',
    success:false,
    solicitud:false,
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_SOLICITUD:
            return{
                data: prevState.data,
                error: null,
                success: false,
                solicitud:true,
            };
        case ARTICULO_CREATE:
            return{
                data: prevState.data,
                error: '',
                success: true,
                solicitud:true
            };
            case ARTICULO_RESPONSE:
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
                        solicitud: false,
                        success: false,
                    };    
        default:
            return prevState;
    }
};

export default createReducer;