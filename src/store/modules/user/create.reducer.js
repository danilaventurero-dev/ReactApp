import {USER_CREATE} from './const';

const initialState = {
    data:  [],
    error: '',
    success:'hola'
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_CREATE:
            return{
                data: prevState.data,
                error: null,
                success: action.payload,
            };
    
        default:
            return prevState;
    }
};

export default createReducer;