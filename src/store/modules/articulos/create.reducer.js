import {ARTICULO_CREATE, ARTICULO_CLEAR} from './const';

const initialState = {
    data:  [],
    error: '',
    success:''
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case ARTICULO_CREATE:
            return{
                data: prevState.data,
                error: null,
                success: action.payload,
            };
            case ARTICULO_CLEAR:
                return{
                    data: prevState.data,
                    error: null,
                    success: '',
                };
        default:
            return prevState;
    }
};

export default createReducer;