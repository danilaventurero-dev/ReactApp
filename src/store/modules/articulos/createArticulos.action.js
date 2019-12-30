import {
     ARTICULO_SOLICITUD
    ,ARTICULO_CREATE
    ,ARTICULO_ERROR
    ,ARTICULO_RESPONSE
    ,ARTICULO_VOID
} from './const';
import { saveService } from '../../../services/articulo.services';

const solicitudCreateActionCreator = () => ({
    type: ARTICULO_SOLICITUD,
    payload: true
})

const ejecucionCreateActionCreator = () => ({
    type: ARTICULO_CREATE,
    payload: null
})

const responseCreateActionCreator = () => ({
    type: ARTICULO_RESPONSE,
    payload: null
})

const voidCreateActionCreator = () => ({
    type: ARTICULO_VOID,
    payload: false
})

const errorCreateActionCreator = (err) => ({
    type: ARTICULO_ERROR,
    payload: err
})

export const createActionsAsyncCreator = (data) => {
    return (dispatch) => {
        dispatch(solicitudCreateActionCreator(data))
        
        saveService(data).then(data => {

            dispatch(ejecucionCreateActionCreator(data.message));
            debugger
            if (data.message === 'success') {
                dispatch(responseCreateActionCreator());
                dispatch(voidCreateActionCreator());
                
            }else{
                dispatch(errorCreateActionCreator(data.message))
            }
        }).catch(err => {
            
            dispatch(errorCreateActionCreator(err));
        })
    }
}