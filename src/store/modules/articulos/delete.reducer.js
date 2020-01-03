import {ARTICULO_DELETE_SOLICITUD,ARTICULO_DELETE_EJECUCION,ARTICULO_DELETE_RESPONSE,ARTICULO_DELETE_VOID} from './const';

const initialState = {
    message:'',
    solicitud:  false,
    success:false
};

const deleteArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_DELETE_SOLICITUD:
            return{
                solicitud: true,
                success:false,
                error: '',
            };
        case ARTICULO_DELETE_EJECUCION:
            return{
                message: action.payload,
                solicitud:true,
                success:false,
                error: null,
            };
            case ARTICULO_DELETE_RESPONSE:
            return{
                message: action.payload,
                solicitud:false,
                success:true,
                error: null,
            };
            case ARTICULO_DELETE_VOID:
                return{
                    message: prevState.message,
                    solicitud:false,
                    success:action.payload,
                    error: null,
                };
        default:
            return prevState;
    }
};

export default deleteArticulosReducer;