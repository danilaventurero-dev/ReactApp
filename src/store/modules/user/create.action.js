import {USER_CREATE, USER_CLEAR} from './const';
import { saveService } from '../../../services/user.services'

const userCreateActionCreator = (data) => ({
    type: USER_CREATE,
    payload: data
})

const clearActionCreator = () => ({
    type: USER_CLEAR,
    payload: null
})

export const saveActionsAsyncCreator = (nombre,email,password) => {
    return (dispatch) => {
        
        saveService(nombre,email,password).then(data => {
            dispatch(userCreateActionCreator(data.message));
            if (data.message === 'success') {
                dispatch(clearActionCreator());
            }
            
            
        }).catch(err => {
            //dispatch(errorActionCreator(err));
        })
    }
}