import {USER_CREATE, USER_CLEAR} from './const';

const initialState = {
    data:  [],
    error: '',
    success:''
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_CREATE:
            return{
                data: prevState.data,
                error: null,
                success: action.payload,
            };
        case USER_CLEAR:
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