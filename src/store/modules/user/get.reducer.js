import {USER_GET} from './const';

const initialState = {
    data:  null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const getReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_GET:
            return{
                data: action.payload,
                error: null,
                success: null,
                errorMessage: null,
                loading:false
            };
    
        default:
            return prevState;
    }
};

export default getReducer;