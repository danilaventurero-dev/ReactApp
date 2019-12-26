import {USER_CREATE} from './const';
import { saveService } from '../../../services/user.services'

const userCreateActionCreator = (data) => ({
    type: USER_CREATE,
    payload: data
})

export const saveActionsAsyncCreator = (nombre,email,password) => {
    return (dispatch) => {
        
        saveService(nombre,email,password).then(data => {
            dispatch(userCreateActionCreator(data.data.message));
        }).catch(err => {
            //dispatch(errorActionCreator(err));
        })
    }
}