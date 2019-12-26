import {
    AUTH_LOGIN,
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

        default:
            return prevState;
    }
}

export default loginReducer;