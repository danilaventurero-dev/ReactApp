import {ARTICULO_UPDATE_EJECUCION
    , ARTICULO_UPDATE_SOLICITUD
    ,ARTICULO_UPDATE_SUCCESS
    ,ARTICULO_UPDATE_ERROR} from './const';

const initialState = {
    message:'',
    solicitud:  false,
    success:false,
    error:false
};

const updateArticulosReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_UPDATE_SOLICITUD:
            return{
                message:prevState.message,
                solicitud: true,
                success:false,
                error: false,
            };
        case ARTICULO_UPDATE_EJECUCION:
            return{
                message: action.payload,
                solicitud:prevState.solicitud,
                success:prevState.success,
                error: prevState.error,
            };
            case ARTICULO_UPDATE_SUCCESS:
            return{
                message: prevState.message,
                solicitud:false,
                success:true,
                error: false,
            };
            case ARTICULO_UPDATE_ERROR:
                return{
                    message: action.payload,
                    solicitud:false,
                    success:false,
                    error: true,
                };
        default:
            return prevState;
    }
};

export default updateArticulosReducer;