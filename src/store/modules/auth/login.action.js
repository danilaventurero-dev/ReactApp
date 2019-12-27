import {AUTH_LOGIN,AUTH_LOGOUT} from './const';
import {loginService} from '../../../services/login.services';


export const logoutAction = () => ({ type: AUTH_LOGOUT, payload: null });

const successActionCreator = (data) =>({
    type: AUTH_LOGIN,
    payload: data,
});

export const loginActionsAsyncCreator = (email, password) => {
    return (dispatch, getStore) => {
        
        loginService({ email, password }).then(data => {
            
            console.log(data.data)
            
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            //dispatch(errorActionCreator(err));
        })
    }
}