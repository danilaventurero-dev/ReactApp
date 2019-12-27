import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from './const';

const initialState = {
    data: localStorage.getItem('jwt') ||  null,
    error: null,
    success: null
};

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case AUTH_LOGIN:
            localStorage.setItem('jwt', action.payload);
            return {
                data: action.payload,
                error: false,
                success: true,
            };
            case AUTH_LOGOUT:
                localStorage.removeItem('jwt');
                return {
                    data: null,
                    error: false,
                    success: true,
                };

        default:
            return prevState;
    }
}

export default loginReducer;